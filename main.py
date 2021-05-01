import cv2


trained_faces = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")

img = cv2.imread('img.jpg')

gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

face_coordinates = trained_faces.detectMultiScale(gray_img)

print(face_coordinates)

cv2.rectangle(img, (face_coordinates[0][0], face_coordinates[0][1]), (face_coordinates[0][2] + face_coordinates[0][0], face_coordinates[0][3] + face_coordinates[0][1]), (0,255,0), 2)

cv2.imshow("Face detector", img)

cv2.waitKey()

print("Code Completed")