import cv2
import imageio
fg = cv2.imread('img/4.jpg')
mask = cv2.imread('img/4-mask.png', cv2.IMREAD_UNCHANGED)
mask = cv2.resize(mask, fg.shape[1::-1])

frames = imageio.mimread('img/giphy.gif')


fg_h, fg_w, fg_c = fg.shape
bg_h, bg_w, bg_c = frames[0].shape
top = int((bg_h-fg_h)/2)
left = int((bg_w-fg_w)/2)
bgs = [frame[top: top + fg_h, left:left + fg_w, 0:3] for frame in frames]


results = []
alpha = 0.3
for i in range(len(bgs)):
    result = fg.copy()
    result[mask[:,:,3] != 0] = alpha * result[mask[:,:,3] != 0]
    bgs[i][mask[:,:,3] == 0] = 0
    bgs[i][mask[:,:,3] != 0] = (1-alpha)*bgs[i][mask[:,:,3] != 0]
    result = result + bgs[i]
    results.append(result)
imageio.mimsave('result.gif', results)

