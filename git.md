**Git and GitHub Commands**

---

### Configuring Git

1. **Global Configuration**:
   ```
   git config --global user.name "Username"
   git config --global user.email "mail.com"
   ```
   - Sets username and email globally for Git.

2. **Check Configuration**:
   ```
   git config --list
   ```
   - Displays the user credentials and settings.

3. **Git Status**:
   ```
   git status
   ```
   - Shows the state of files in your repository.

---

### Setting Up a Project with Git and GitHub

1. **Creating a Repository**:
   - Create a repository on GitHub and copy its URL.

2. **Local Setup**:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```
   - Initialize a Git repository, add files, and commit changes.

3. **Connecting to GitHub**:
   ```
   git remote add origin <repository_url>
   git push -u origin main
   ```
   - Link the local repository to GitHub and push changes.

---

### Saved Points in Git

1. **Staging and Committing Changes**:
   ```
   git add <file>
   git commit -m "message"
   ```
   - Stages and commits changes.

2. **View Commit History**:
   ```
   git log
   ```
   - Displays a log of commits.

3. **Reverting Changes**:
   ```
   git restore <file>
   git checkout <hash>
   ```
   - Restores files or views past commits.

4. **Handling Detached HEAD**:
   - Use `git checkout -b <new_branch> <hash>` to create a branch from a past commit.

---

### Reset Options

1. **Types of Resets**:
   - **Soft Reset**:
     ```
     git reset --soft <commit_hash>
     ```
     - Moves HEAD but keeps changes staged.
   - **Mixed Reset**:
     ```
     git reset --mixed <commit_hash>
     ```
     - Unstages changes but keeps them locally.
   - **Hard Reset**:
     ```
     git reset --hard <commit_hash>
     ```
     - Deletes all uncommitted changes.

---

### Git Workflow Basics

1. **Workflow**:
   - Clone: `git clone <repository_url>`
   - Modify: Edit files locally.
   - Stage & Commit:
     ```
     git add .
     git commit -m "message"
     ```
   - Push: `git push origin main`
   - Pull: `git pull origin main`

2. **Branching**:
   ```
   git checkout -b <branch_name>
   ```
   - Create and switch to a new branch.

---

### Branching and Merging

1. **Branch Management**:
   - Create: `git branch <branch_name>`
   - List: `git branch`
   - Switch: `git checkout <branch_name>`
   - Delete: `git branch -d <branch_name>`

2. **Merging**:
   - Merge Changes:
     ```
     git checkout main
     git merge <branch_name>
     ```
   - Types of Merges:
     - **Fast-Forward**: Simply moves the pointer forward if no new commits exist.
     - **Three-Way**: Combines changes if both branches have modifications.

3. **Handling Conflicts**:
   - Markers: `<<<<<<<`, `=======`, `>>>>>>>` indicate conflicts.
   - Resolve manually, then:
     ```
     git add <file>
     git commit
     ```

---

### Managing Changes Across Branches

1. **Switching and Stashing**:
   - Save Uncommitted Changes:
     ```
     git stash
     ```
   - Restore Changes:
     ```
     git stash apply
     ```
   - Use stash when switching branches to temporarily save work.

2. **Working with Remote Branches**:
   - Fetch: `git fetch`
   - Check Out: `git checkout <branch_name>`

---

### Key Features and Collaboration

1. **Tracking File States**:
   - **Untracked**: New files not yet staged.
   - **Modified**: Files with changes but not staged.
   - **Staged**: Files ready to commit.

2. **Collaboration Tips**:
   - Regularly pull updates (`git pull`) to stay in sync.
   - Push your changes (`git push`) for others to access.

---

### Advanced Git Concepts

1. **File Permissions**:
   - Track permission changes:
     ```
     chmod +x <file>
     git add <file>
     git commit -m "Updated permissions"
     ```

2. **Empty Folders**:
   - Git doesn’t track empty folders. Use a placeholder like `.gitkeep` to track them.

---

### Stash Feature in Detail

1. **Purpose**:
   - Temporarily saves uncommitted changes when switching tasks or branches.

2. **Commands**:
   - Stash: `git stash`
   - Apply Stash: `git stash apply`
   - List Stashes: `git stash list`

3. **Use Case**:
   - Helps manage transitions between branches without committing incomplete work.

---

### Summary of Collaboration and Merging

1. **Merging**:
   - Combines changes from branches for collaborative work.
   - Use `git merge` for integration.

2. **Merge Conflicts**:
   - Occurs when overlapping changes exist. Resolve manually.

3. **Collaboration**:
   - Regularly push and pull updates to keep the team’s work in sync.