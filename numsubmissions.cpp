/*numsubmissions.cpp*/

//
// computes and returns the # of non-zero submissions, based
// on gradescope's meta data.  You can capture the return in 
// bash by using $?
//

#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>
#include <algorithm>
#include <cstdlib>

#include "json.hpp"  // nlohmann JSON library: https://github.com/nlohmann/json

using namespace std;
using json = nlohmann::json;



int main()
{
  //
  // input submission meta data:
  //
  string filename = "/autograder/submission_metadata.json";
  
  //filename = "submission_metadata.json";

  ifstream submission(filename);
  
  if (!submission.good())
  {
    cout << "**ERROR: unable to open submission metadata file '" << filename << "'." << endl;
    cout << endl;
    
    return -1;
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
      cout << "Score: " << score << endl;
      numSubmissions++;
    }
  }

  cout << endl;
  
  if (numSubmissions == 1)
    cout << "You have " << numSubmissions << " submission with a score > 0." << endl;
  else
    cout << "You have " << numSubmissions << " submissions with a score > 0." << endl;
    
  cout << endl;

  return numSubmissions;
}



