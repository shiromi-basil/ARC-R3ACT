import csv
import unittest

from Data_Science.PreProcess import PreProcess
from Data_Science.SentimentAnalysis import SentimentAnalysis


class TestSentimentAnalysis(unittest.TestCase):

    #retrieving the testData and testLabels from the csv file
    @classmethod
    def setUp(self):
        file = open("../tests/TestingData.csv", 'r')
        # all the records in the file are converted to a 2d array
        data = list(csv.reader(file, delimiter=','))
        self.testData = []
        self.testLabel = []
        # # append the pre-processed the review and the sentiment, to testData and testLabel
        for j in range(1, len(data)):
            self.testData.append(PreProcess.pre_process_review(data[j][0], "svr"))
            self.testLabel.append(float(data[j][1]))
        # closing the file
        file.close()

    #using this function to test the predict sentiment values
    def test_predict_sentiment(self):
        #the preprocessed reviews and the labels are passed to find the accuracy and determine the overall sentiment of the given data
        values = SentimentAnalysis.predict_sentiment(self.testData, self.testLabel)
        self.assertEqual(values["overall_sentiment"], 49.54589647711921)

#used to start the test
if __name__ == '__main__':
    unittest.main()
