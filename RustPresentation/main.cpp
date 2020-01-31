#include <iostream>

int main() {
    /*
    int x = 18;
    std::cout << x << std::endl;
    */


    /*
    {
        int x = 18;
    }
    std::cout << x << std::endl;
    */



    /*
    char y [6] = { 'J', 'o', 's', 'e', 'p', 'h' };
    std::cout << y[3] << std::endl;
    */



    /*
    {
        char y [6] = { 'J', 'o', 's', 'e', 'p', 'h' };
    }
    std::cout << y[3] << std::endl;
    */



    
    int z = 3; // The size of the array

    char * pointy; // Create a pointer to a memory location
    {
        pointy = new char [z]; // Put something there
        pointy[z - 1] = 'x';
    }

    std::cout << pointy[z - 1] << std::endl;

    //delete pointy;

    std::cout << pointy[z - 1] << std::endl;
}