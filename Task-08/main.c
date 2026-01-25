#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>
#include <signal.h>

#define MAX_BG 100

pid_t bg_pids[MAX_BG];
int bg_count = 0;
pid_t foreground_pid = -1;


void handle_sigchld(int sig) { 
    while (waitpid(-1, NULL, WNOHANG) > 0);
}




void parse_input(char *input, char **args) {
    int i = 0;
    char *token = strtok(input, " \n");

    while (token != NULL) {
        args[i++] = token;
        token = strtok(NULL, " \n");
    }
    args[i] = NULL;
     
}

int main() {

  
  
  char input[1024];
  char *args[100];

  signal(SIGCHLD, handle_sigchld);




  while (1) {
    int background = 0;
    int i = 0;

    printf("> ");
    fflush(stdout);

    if(!fgets(input, sizeof(input), stdin)) {
      break;
    }
    

    
    parse_input(input, args);
    
    if (args[0] == NULL) {
      continue;
    } 


    if (strcmp(args[0], "exit") == 0) {
      break;
    }

    if (strcmp(args[0], "cd") == 0) {
      chdir(args[1]);
      continue;
    }

    if (strcmp(args[0], "jobs") == 0) {
      printf("background Process: \n");
      for (int j = 0; j < bg_count; j++) {
        printf("PID: %d\n", bg_pids[j]);
      }
      continue;
        
    }

    
    
    while (args[i] != NULL) i++; 
    int last = i - 1;

    if (last >= 0 && strcmp(args[last], "&") == 0) {
      background = 1;
      args[last] = NULL;
    }


    
    pid_t pid = fork();

    if (pid == 0) {
      execvp(args[0], args);
      perror("exec failed");

    } else {
      if (!background) {
        int status;
        while (waitpid(pid, &status, 0) == -1) {
          continue;
        }


      } else {
        bg_pids[bg_count++] = pid;
        printf("background pid: %d\n", pid);
      }
    }
  } 

  return 0;


}
