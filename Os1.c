/* fork system call */
#include<stdio.h>
#include<unistd.h>
#include<sys/types.h>
int main()
{
 int id,childid;
 id=getpid();
 if((childid=fork())>0){
    printf("\n i am in the parent process %d",id);
    printf("\n i am i the parent process %d",getpid());
    printf("\n i am in the parent process %d",getppid());
 }
  else
  {
    printf("\n i am in the child process %d",id);
    printf("\n i am i the child process %d",getpid());
    printf("\n i am in the child process %d",getppid());
  }
}
