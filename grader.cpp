/*grader.cpp*/

#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>
#include <algorithm>
#include <cstdlib>

#include <sys/wait.h>  // WEXITSTATUS

#include "json.hpp"  // nlohmann JSON library: https://github.com/nlohmann/json

using namespace std;
using json = nlohmann::json;


class TestResult
{
private:
public:
  bool    Result;
  string  Msg;
  int     Points;
  
  TestResult()
    : Result(false), Msg(""), Points(0)
  { }
  
  TestResult(bool r, string msg, int points)
    : Result(r), Msg(msg), Points(points)
  { }
};


//
// Read metadata to get number of submissions:
//
int getNumSubmissions()
{
  //
  // input submission meta data:
  //
  string filename = "/autograder/submission_metadata.json";

  ifstream submission(filename);
  
  if (!submission.good())
  {
    cout << "**ERROR: unable to open submission metadata file '" << filename << "'." << endl;
    cout << endl;
    
    return 0;
  }
    
  json data;

  submission >> data;  // input the JSON submission meta data:
  
  //
  // What we want to count are the # of elements in the 
  // "previous_submissions" collection:
  //
  int numSubmissions = 0;

  for (auto& e : data["previous_submissions"])
  {
    //cout << e["submission_time"] << endl;
    //cout << e["score"] << endl;

    //
    // Let's only count submissions that are non-zero, e.g. we 
    // want to skip submissions of the incorrect file, or that
    // don't compile:
    //
    double score;

    try
    {
      score = std::stod(e["score"].get_ref<std::string&>());
    }
    catch (std::exception & ex)
    {
      score = 0.0;
    }

    if (score > 0.0)
    {
      //cout << "Score: " << score << endl;
      numSubmissions++;
    }
  }

  //cout << endl;
  //
  //if (numSubmissions == 1)
  //  cout << "You have " << numSubmissions << " submission with a score > 0." << endl;
  //else
  //  cout << "You have " << numSubmissions << " submissions with a score > 0." << endl;
  //  
  //cout << endl;

  return numSubmissions;
}



//
// Test functions:
//
void RunOneTest(int testnum, vector<TestResult>& results)
{
  string cmd;
  int    rc;
  int    points;
  
  string prefix = "Test " + std::to_string(testnum);
  
  //
  // Score of tests, of which there are 11:
  // 
  switch(testnum)
  {
    case 1:
      points = 4;
      prefix += " - basic: ";
      break;
      
    case 2:
      points = 4;
      prefix += " - basic: ";
      break;
   
    case 3:
      points = 4;
      prefix += " - basic: ";
      break;
      
    case 4:
      points = 14;
      prefix += " - Dijkstra ";
      break;

    case 5:
      points = 4;
      prefix += " - basic: ";
      break;

    case 6:
      points = 15;
      prefix += " - stress #1: ";
      break;

    case 7:
      points = 15;
      prefix += " - stress #2: ";
      break;

    case 8:
      points = 15;
      prefix += " - stress #3: ";
      break;

    case 9:
      points = 15;
      prefix += " - stress #4: ";
      break;       
      
    case 10:
      points = 10;
      prefix += " - valgrind: ";
      break;   
        
    default:
      // unknown test, internal error:
      points = 0;
      prefix += " (?): ";
      break;
  }
  
  //
  // run test:
  // 
  if (testnum < 10)
    cmd = "./run_tests test0" + std::to_string(testnum) + ".cpp";
  else if (testnum != 10)
    cmd = "./run_tests test" + std::to_string(testnum) + ".cpp";
  else  // test 10 is special: valgrind:
    cmd = "./run_valgrind test" + std::to_string(testnum) + ".cpp";
 
  rc = system(cmd.c_str());
  
  //
  // parse return value and set result:
  // 
  if (rc != 0)
    rc = WEXITSTATUS(rc);
  
  switch (rc)
  {
    case 0:  // all tests passed
    {
      TestResult tr(true, prefix + "yay, passed!", points);
      results.push_back(tr);
      break;
    }
    
    case 1:  // at least one test failed
    {
      TestResult tr(false, prefix + "failed.", 0);
      results.push_back(tr);      
      break;
    }
    
    case 2:  // tests crashed
    {
      TestResult tr(false, prefix + "crashed.", 0);
      results.push_back(tr);
      break;
    }
    
    case 3:  // tests failed to compile
    {
      TestResult tr(false, prefix + "failed to compile.", 0);
      results.push_back(tr);
      break;
    }
    
    case 5:  // valgrind failed (==> ptr error or memory leak)
    {
      TestResult tr(false, prefix + "memory leak.", 0);
      results.push_back(tr);
      break;
    }
    
    default: // script usage error
    {
      TestResult tr(false, prefix + "internal script error (unknown).", 0);
      results.push_back(tr); 
      break;
    }
  }//switch
}


int main()
{
  vector<TestResult> results;
  
  //
  // We have a bash script called run_tests that runs a set of unit tests 
  // against student's code.  We're going to run this script over and
  // over again so that the unit tests are executed one at a time --- this
  // prevents a crashed unit test from preventing the running of other tests.
  // The run_tests script returns one of:
  //   0 => all tests passed
  //   1 => at least one test failed
  //   2 => tests crashed
  //   3 => tests failed to compile
  //   4 => script failed (e.g. missing arg)
  //

  for (int i = 1; i <= 10; ++i)  // tests 1..10, where #10 is valgrind:
  {
    RunOneTest(i, results);
  }

  //
  // Tests are run, let's tabulate and output the results into a JSON
  // file named "results.json", as per Gradescope spec:
  //
  json  J;
  
  int score = 0;
  
  for (const TestResult& tr : results)  // compute total score:
    score += tr.Points;
    
  if (score > 100)  // just in case:
    score = 100;
  
  J["score"] = score;
  
  int submissions = getNumSubmissions();
  submissions++;  // count this one
    
  if (score == 100)
    J["output"] = "Excellent! Submission " + std::to_string(submissions) + " of 6.";
  else if (score >= 80)
    J["output"] = "Very good! Submission " + std::to_string(submissions) + " of 6.";
  else if (score >= 60)
    J["output"] = "Good, keep going. Submission " + std::to_string(submissions) + " of 6.";
  else
    J["output"] = "Go go go! Submission " + std::to_string(submissions) + " of 6.";

  J["visibility"] = "visible";  // can they see summary of each test case:
  J["stdout_visibility"] = "hidden";  // can they see stdout:
    
  // now include the individual results in the JSON:
  json tests;
  
  for(TestResult& tr : results)
  {
    json element;
    
    element["score"] = tr.Points;
    element["output"] = tr.Msg;
    
    //if (tr.TestNum <= 7)  // first 7 we allow stdout to be visible:
    //{
    //  element["stdout_visibility"] = "visible";
    //}
    //else
    //{
      element["stdout_visibility"] = "hidden";
    //}
   
    tests.push_back(element);
  }
  
  J["tests"] = tests;
  
  //
  // leaderboard:
  //
  string  stars;
  
  if (score >= 100) stars = "*****";
  else if (score >= 80) stars = "****";
  else if (score >= 60) stars = "***";
  else if (score >= 40) stars = "**";
  else if (score >= 20) stars = "*";
  else stars = "";
  
  json leaderboard;
  json column1 = { {"name", "Score"}, {"value", score} };
  json column2 = { {"name", "Stars"}, {"value", stars} };
  leaderboard.push_back(column1);
  leaderboard.push_back(column2);
  
  J["leaderboard"] = leaderboard;
  
  // write the JSON:
  std::ofstream output("results.json");
  output << std::setw(4) << J << std::endl;
  
  // 
  // done!
  //

  return 0;
}



