# git init: A Beginner's Guide to Git Workflow

## Intro
Hey, I’m Alaina from Ladies Storm Hackathons and I’m here to teach you a bit about Git.

Git is one of the most notoriously confusing topics for beginning coders, and – in my experience – it isn’t taught well in school. My goal in the next [INSERT AMOUNT OF TIME] is to teach you the basics of using Git. I hope to motivate this tutorial by providing examples that give you an idea of why Git is useful.

Let’s get started. Pun intended.

## What is Git?
A lot of times in tech, more experienced people toss around these buzzwords and expect everyone to know what they’re talking about. I’d rather assume no prior knowledge, and start from the beginning.

So, what is Git?

## Video game controller
No, Git is not a game. But, what Git does can be explained by video games.

Here’s an example.

When you’re playing a video game, you may want to save your progress at some point. Maybe you just defeated a boss. It is imperative that you save your progress at many points throughout game play because if you mess things up later, you know that you can go back to a good point in the game and try again.

Git is similar. Git allows you, the coder, to save your progress on a codebase at any given time. Git exists so you can modify, break, and fix your code without fearing that you will mess it up permanently. If you break your code but you have a save point where your code worked at some time in the past, you can always go back to that save point and try again.

## Less fun explanation
The video game example is quite fun, but let’s get into the nitty-gritty.

Git is a version-control system. It allows you, the coder, to create a history for your code using save points. In other words, Git holds a history of multiple versions of your code, from the start to the bitter end.

Git leaves it up to you as the coder to decide WHEN to create these save points in your history. Git allows you to create them whenever you see fit. Some common situations where it is a good idea to create save points include adding a function, creating a feature, or fixing a bug.

Git allows many people to edit the same code without overwriting each other. You and your friends can work on different features and ideas within the same codebase at the same time. For this reason, Git is a great tool for collaboration. More on this later.

## The takeaway?
All in all, Git was created in order to make utterly trashing a codebase very, very difficult. Thus, using Git is to your advantage as a programmer once you get familiar with it.

## Git... while alone
First, I want to discuss how you can use Git while working on a one-person codebase. Collaboration will come later.

## Some terminology
Before we start talking about using Git as an individual, I want to clear up some buzzwords you may have heard others use in discussing Git.

I defined Git previously, but often, beginning coders conflate Git and GitHub. Git is a version-control system that keeps track of the history of a codebase. GitHub is merely a popular website for hosting Git repositories. Most terminology and commands that I discuss will be from Git; if any are GitHub-specific, I will be sure to say.

A repository (or repo) is where the history of a given codebase is stored. One repository typically holds one project, which may comprise of many files and folders. I’ll discuss repos in more detail when I get to local versus remote.

The staging area keeps track of the statuses of different files in the codebase. Have they been edited recently? Is the coder ready to incorporate them into the codebase history? The staging area answers these questions and more. More on the staging area soon.

A commit is a saved version of code at a given point in time. Commits are organized by commit messages, which the programmer writes to keep track of the changes they made to the most recent version of the code.

Local versus remote is a key concept in Git. I know I said I would not discuss collaborative usage of Git right away, but I think the importance of this concept supersedes that.

“Local” repos encapsulate the history of the codebase that you have created. Only you can see the code versions in your local repo. In contrast, the “remote” repo is visible to any fellow contributors that you may have on a given codebase. In this case, the remote repo holds the combined history of each contributor’s local repos.

If there are no other contributors besides you, the remote repo can be private to you, or visible to anyone of your choosing. In this case, the remote repo will mirror the local repo, so long as you keep updating the remote repo with changes in your local repo.

I’ll follow up with the definitions of these terms when they appear in my slides to keep them fresh in your mind.

## Git commands while local
For now, we’re going to focus on using Git as an individual, which primarily means working in the local repo.

There are six relevant commands for beginners. These commands are usable on the command line.

## git init
First of all, we have git init. This is used to initialize a Git repo. What does that really mean? Essentially, git init turns a directory (i.e. filepath, folder) on your computer into a Git repo, which gives you the power to create a version-control-based history for the contents of that directory.

After initializing a Git repo in a directory, you will start to keep track of local changes within that directory. These can be easily visualized using our next command: git status.

## git status
As I just noted, git status allows the coder to visualize the staging area. As I mentioned previously, the staging area keeps track of the status of all files in the directory that was initialized to be a Git repo.

Statuses include:
- “Staged for commit,” which means that this file was marked by the coder to be put in the next save point or version of the codebase
- “Unstaged but modified,” which means that this file was recently edited, and thus Git suggests that it should be “staged for commit”
- “Untracked,” which means that this file was not seen in previous versions of the codebase, i.e. it was newly created

Git status should be used often by beginning coders in order to gain a visual for what is really going on in their Git repo.

## git add
So how do we mark files with the “staged for commit” status? Git add.

Git add stages files that previously had a status of “untracked” or “unstaged but modified.” Every file that has been moved to the “staged for commit” part of the staging area is set up to be added to the code’s history as a commit.

There are two major ways that beginning developers should be using git add:

First, using git add on individual files. To do this, you type “git add” and then the filename into the command line.

Second, using git add on all untracked and modified files. To do this, you type “git add” hyphen capital A into the command line. The “-A” component of this command is known as a flag.

## git commit
Now that we’ve used git add to mark files as “staged,” we can use git commit in order to actually commit them to the code’s history. Reminder: a commit is a saved version of code at a given point in time. This is the video game save point from our earlier analogy.

True to its name, git commit saves a snapshot of the code that holds all the staged files alongside the most recently committed version of all files that were not staged. 

As mentioned earlier, commits are organized by commit messages, in which the coder writes what changes they made in their current commit. For instance, if I added a “speaking” page to my personal website (which I recently did), I probably had a commit with a message that said “Adds speaking page” or something like that. Commits are for you, the coder, or anyone else looking at your code to stay organized and keep track of your thinking and progress.

In typing git commit into the command line, the hyphen m flag and then a commit message in quotes are added on in order to facilitate you creating a commit with a corresponding message.

## git log
Git log gives the coder a bird’s eye view of their entire commit history. This history is listed commit by commit, with each commit message, timestamp, and alphanumeric identifier featured prominently.

Git log is useful for visualizing your code’s history, and – if need be – going back in your code’s history to the last version or save point where things were working as you desired.

## git diff
Git diff allows the coder to see what changes that they made to files in their local repo since their last commit. Git commit is similar to git status, except it shows differences between the last commit and the current version of the code line-by-line.

## DEMO: introducing local repos
Git init

Git status (should be nothing)

Touch main.py

Git status (should be untracked)

Git add main.py

Git status (should be staged for commit)

Git commit -m “Adds main.py”

Git log

Touch function.py

Vi main.py –> make some edits

Git status (should have untracked & unstaged files)

Git diff

Git add -A

Git status (should all be staged for commit)

Git commit -m “Updates main.py; adds function.py”

## Local repos are gr8
So clearly local repos have a lot of awesome features. Most notably, they allow you to create a saved history of your code organized by commits.

Then why did we talk about remote repos several slides ago? What advantages does working remotely offer?

## Why remote repos matter
As an individual or team coder, you may find remote repos useful because they allow you to back up your code outside of your computer. This is where GitHub comes in handing – a GitHub repo can serve as the remote repo for your local repos.

Remote repos support team collaboration… but we’ll discuss this more in a few minutes.

One common reason why beginning coders will find remote repos useful is that they allow you to showcase your hard work to others! Have you ever been asked by an employer for your GitHub account? If not, it’s okay – you probably will be soon. Employers like to look at your remote repos on GitHub in order to see what you’ve created. Learning about remote repos is a necessary prerequisite to this.

## Why remote repos matter -- open source
Finally, one of my personal favorite motivators for using remote repos is contributing to open source. That’s not the point of today’s talk, but if you’re interested in learning more about open source, I would love it if you check out my Medium post called 99 Problems.

## git push
Before we do a brief tutorial on the flow of working with both local and remote repos as an individual coder, I would like to teach you one more Git command.

Git push updates a remote repository – that is, whichever remote repo you link to your local repo – with the latest commit(s) from that local repo. A common command is “git push origin master,” where, in somewhat oversimplified terms, origin is the remote repo and master is the local repo. I’ll explain this further when we discuss branching.

The big question of the moment is: how do we connect local and remote repos? Well, I’ll show you how to do this in our next tutorial.

## DEMO: connecting remote + local
Go on GitHub & create new remote repo

Git remote add origin [remote repository URL]

Git push -u origin master

## Collaborating with Git
Now you have an idea of how Git can help you, an individual programmer, in organizing your code into a nice history of save points.

However, oftentimes, Git is used in collaborative settings. If you ever have a software engineering internship, chances are you’ll be working on the same remote Git repo with a team. If you ever attend a hackathon, the same scenario is likely.

So, now I’d like to focus on how Git can be used to enhance collaborative coding.

## More terminology
Before we start talking about using Git as a collaborator, I want to clear up some more buzzwords.

Clone is something we just saw in the last tutorial. Cloning a repository means taking a remote repo and making a local copy of it. This effectively links the local and remote repo.

Branches are used to create a parallel history of the code in order to develop new features, experiment with ideas, or fix bugs without interrupting the code in the main history. I’ll discuss branches in great detail in a few slides.

Fork is a GitHub-specific term. It involves creating a copy of someone else’s repository at a given point in time — often an open source repository — and placing it under your GitHub username and/or storing it on your local machine with the intent of making changes to it. You fork an open source repository in order to start working on it.

Pull request (or PR) is another GitHub-specific term. It means submitting your changes in a forked repository to the original repository, which is the preferred way of adding your contributions to open source projects. Note that your contributions do not automatically get added in: it is up to the maintainer(s) to review, approve, and merge them.

## Remote + local commands
These are the next six relevant Git commands for beginners. These commands are usable on the command line.

## git pull
The git pull command is utilized to update a local repo with the latest changes from the remote repo. Perhaps one of your collaborators made some changes since you last coded. You should use git pull to sync up your remote and local branches so that you can stay up-to-date.

This won’t mean anything to you yet, but git pull is a combination of git fetch and git merge, two commands that I will explain in more detail in a few slides.

## git clone
Remember the demo I showed you in which we connected a pre-existing local repo to a new remote one? Git clone allows the coder to do just the opposite. Say you have an existing remote repo on GitHub. What git clone does it initializes a local repo containing the contents of the remote repo in your working directory, thereby establishing a connection from remote to local.

## Branching
Before I present the commands for branching, I think it’s quite important to discuss the underlying concepts.

Remember way back when I was discussing the command git push origin master? I said that origin was the remote repo and master was the local repo. This isn’t entirely true. Master is actually a branch within the local repo.

So what is a branch?

A branch is a parallel history of commits to a repository’s main history – otherwise known as the master branch. Branches are used to develop features or work on bugs without interrupting the progress and integrity of the master branch.

In fact, you can see the flow of branching in the diagram at the bottom of this slide. The coder creates a branch to make a new feature, builds that new feature, and then merges that branch’s history into the master history.

Note that branches exist in both local and remote repos, and it is imperative that the coder keeps them in sync.

## Branching cheat sheet
Here are the five major branching commands in Git.

Git checkout hyphen b branch name makes a new local branch and sets you up to start working on that branch.

Git branch lists all local repo branches.

Git checkout branch name (without the flag) switches to the specified branch so that you can work on it.

Git merge branch name merges the history of that branch with the master branch.

Git branch hyphen d branch name deletes a branch.

So all this was great, but how do we make sure that local and remote branches stay in sync?

## Important branching note
Git push is what syncs up branches in local and remote repos. Branches only exist in the local repo until git push stores them in the remote repo as well.

## git fetch
Remember a few slides ago when I said that git pull is a combination of git fetch and git merge? I’m finally about to explain what these commands do.

Git fetch updates local branches by giving them information about their remote counterparts, but git fetch does not overwrite the code that you have been working on locally.

## git merge
Git merge combines the history of local and remote branches using the remote branch history we just gathered from git fetch.

As you can see, git pull is a two step process:
- Determining all new commits that exist remote branches (git fetch)
- Merging the history of local branches with their remote counterparts (git merge)

Note that merge conflicts are a super common error that arises while using Git. This occurs when Git cannot automatically figure out how to best combine the differences between your remote and local branches into a logical history. Merge conflicts are beyond the scope of this video, but generally, these can be sorted out by hand.

## DEMO: collaborating remotely
Create GitHub remote repo

Git clone URL

Make some changes on GitHub

Git pull (say that this is the same as fetch + merge)

Git checkout -b “food”

Vi FOOD.md

Then type some food stuff

Git add FOOD.md

Git commit -m “Adds food branch”

Git push origin food

Go on GitHub to see the new branch

Git checkout master

Git merge origin/food

Git commit -m “Merges food with master”

Git push origin master

Git branch -d food

## What's next?
So we just learned about how Git works remotely, locally, individually, and collaboratively. We also used twelve Git commands across our demos. Now what can you – the budding coder – do with this newfound knowledge?

## Git-ing started
My answer? Keep using Git. Keep making errors. Keep correcting them. The only way to get better at Git is to keep using it and run into so many hairy situations that someday they’ll seem like a breeze to you because you’ve seen it all before.

In order to get better at Git, I have a few tips.

Take advantage of commands like git status and git log in order to track your progress.

Use StackOverflow and Google to find answers.

Work through the tutorials of others, make personal cheat sheets, and above all, ask people for help.

## Helpful resources
Speaking of resources, here are a few that I found to be especially awesome. I’ll post my slides in the LSH GitHub repo, so be sure to check that out in order to access these links.

## Time to git started!
No, this is not a real git command. This is just my special way of saying good luck to you as you start your journey with Git.

Thank you so much for listening! Once again, this has been Alaina Kafkes from Ladies Storm Hackathons. Go git started!
