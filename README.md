# Table of Content
---
 ### 1. Part-1 (Not Important)
 ### 2. Part-2

### 1. Part-1 (Not Important)
---
In this part, We followed the apporach:

  - 1. Clean the phone numbers from characters(-,9,0,+).
  - 2. Change one digit in phone number.
  - 3. Add 1 to start of phone number.
  - 4. Convert the numbers to embedding using chars2vec.
  - 5. Checking the cosine similarity of these embedding with the clean number embeddings.
  - 6. Checking the Levenshtein Distance of embedding.


### 2. Part-2
---
This part is more comprehensive, and the ideal approach:

#### 1. Data Generation.
#### 2. Data Cleaning.
#### 3. Embeddings generation.
#### 4. Threshold check.
#### 5. Similarity Search using Faiss.
#### 6. Comparision of Faiss(Euclidean distance) & Levenshtein Distance.
#### 7. Phone Number comparision based on Article(Keypad proximity).


#### 1. Data Generation.
---
Generating phone numbers with `fakers.js` involves using its built-in functions to create realistic, diverse data for testing. This JavaScript library allows you to specify formats and locales, generating phone numbers that mimic real-world patterns, including international codes and area codes. By integrating `fakers.js` into your data generation pipeline, you can produce varied, lifelike data for testing and validation purposes.

Here is generation code of faker.js[Link](/generate_phone.js)

The Generated Data in .csv format[Here](/Generated_Data.csv)


#### 2. Data Cleaning.
---
On the second attempt, the data is generated cleanly, eliminating the need for additional cleaning steps. However, all special characters are removed, and any leading '1' at the start of the phone numbers is also discarded. This ensures that the resulting phone numbers are formatted uniformly and meet specific requirements without further preprocessing.

#### 3. Embedding generation.
---
Converting phone numbers to their natural embeddings involves breaking each number down into its individual digits and representing it as an array. For example, the phone number "9876543" would be transformed into the array [9, 8, 7, 6, 5, 4, 3]. This approach treats each digit as a separate element, allowing the phone number to be represented numerically.

![Here is the picture of embeddings](/asserts/1.png)

#### 4. Threshold Check.
---
When performing similarity search in vector space, setting the right threshold is key to controlling search sensitivity. It defines the maximum distance between vectors for them to be considered similar. For cosine similarity, the threshold is typically between 0 and 1, with 1 indicating identical vectors. A lower threshold filters out irrelevant matches, while a higher one may include unrelated results, so careful adjustment is crucial to balancing accuracy and relevance.

![Here is the picture of threshold check](/asserts/2.png)

#### 5. Similarity Search using Faiss.
---
In similarity search using Faiss, the library primarily uses Euclidean distance (L2 distance) as its default distance metric. This distance measures the straight-line distance between two vectors in vector space, making it effective for tasks where proximity between vectors is crucial.

Faiss also supports other metrics, such as inner product for dot product similarity. However, when L2 distance is applied, Faiss finds the nearest neighbors by calculating the square of the Euclidean distance between vectors, identifying the closest ones based on this metric. This makes it suitable for various use cases like image retrieval, recommendation systems, and more, where L2 distance helps find similar items based on vector proximity.

#### 6. Comparision of Faiss(Euclidean distance) & Levenshtein Distance.
---
Comparision of both the distances and presenting the comparision results.

![Here is picture of sample results](/asserts/3.png)

#### 7. Phone Number comparision based on Article(Keypad proximity).
---
![Here is picture of Keypad matrix](/asserts/4.png)

Assessing the distance and similarity of phone numbers based on keypad proximity involves evaluating how errors, such as those caused by incorrect digit input, affect similarity. This includes considering errors like swapped digits, phonetic similarities, repeated digits, reversed digits, shifted digits, mirrored digits, and duplication. Both Faiss (using Euclidean distance) and Levenshtein distance are tested for these scenarios, and a comparison of their results is performed.


![Here is picture of comparision results](/asserts/5.png)




