
import os
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision

# Create a GestureRecognizer object.
model_path = os.path.abspath("exported_model/gesture_recognizer.task")
recognizer = vision.GestureRecognizer.create_from_model_path(model_path)


for f in os.listdir("tests"):
    # Load the input image.
    image = mp.Image.create_from_file("tests/" + f)

    # Run gesture recognition.
    recognition_result = recognizer.recognize(image)

    if len(recognition_result.gestures) == 0:
        print("No gesture recognized for photo " + f)
        continue

    # Display the most likely gesture.
    top_gesture = recognition_result.gestures[0][0]
    print(f"Gesture recognized for photo {f}: {top_gesture.category_name} ({top_gesture.score})")