import argparse

Featurevalues = [-1, 0, 1]

def main(): 
    parser = argparse.ArgumentParser(
        prog="Decision tree", 
        description="Phishing website detector helper tool",
        epilog="May the help us all!"
    )
    parser.add_argument(
        "Feature_value_1",
        choices= Featurevalues, 
        type=int,
        help=("supply a 1 if the website is legite" 
              +"supply a 0 if the website is suspicoius"
            + " supply a -1 if the wensite is phishy")

    )
    
    parser.add_argument(
            "Feature_value_2",
            choices= Featurevalues, 
            type=int,
            help=("supply a 1 if the website is legite" 
                +"supply a 0 if the website is suspicoius"
                + " supply a -1 if the wensite is phishy")
    )
    
    parser.add_argument(
            "Feature_value_3",
            choices= Featurevalues, 
            type=int,
            help=("supply a 1 if the website is legite" 
                +"supply a 0 if the website is suspicoius"
                + " supply a -1 if the wensite is phishy")
    )
    args = parser.parse_args()
    print (args)

    
main()
      



