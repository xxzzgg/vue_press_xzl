# git规范

### 分支命名规范
语义化
``` js
// Good cases
feat/2198234-add-error-boundary
fix/api-error-message

// Bad cases
text
hotfix-gyt
dev-gyt
```

### commit规范

Commit Message
Commit Message 应遵循 [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) 规范。

```http request
feat: A new feature

fix: A bug fix（code、UI）

docs: Documentation only changes

perf: A code change that improves performance

refactor: A code change that neither fixes a bug nor adds a feature

style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

test: Adding missing tests or correcting existing tests

build: Changes that affect the build system or external dependencies

ci: Changes to our CI configuration files and scripts

chore: Other changes that don't modify src or test files

revert: Reverts a previous commit. If the commit reverts a previous commit, it should begin with revert: , followed by the header of the reverted commit. In the body it should say: This reverts commit <hash>., where the hash is the SHA of the commit being reverted.
```

### Rebase vs Merge
关于 Rebase 和 Merge 的讨论，可以参考[这篇文章](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)。
另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用 Cherry pick

### 异同总结
- Rebase 和 Merge 都可以用来合并不同分支的 commits
- Merge 可以保持修改内容的历史记录，但是历史记录会很复杂，关注点在于真实的操作记录
- Rebase 历史记录简单（线性），是在原有提交的基础上将差异内容反映进去


### merge例子
现在有bugFix分支 和 开发分支main
如果需要合并需要怎么做 
先提交 bugFix  (git commit)
再提交 main  (git commit)
切换到main 执行git merge bugFix

### rebase 例子
现在有bugFix分支 和 开发分支main
如果需要合并需要怎么做 
先提交 bugFix  (git commit)
再提交 main  (git commit)
切换到bugFix 执行git rebase main







### 推荐操作
- 合并 merge 分支的最新代码至本地分支，请使用 git rebase master
- 将本地代码合入公共分支，请使用 merge（提交 merge request）


### 必要的全局配置

- git config --global user.name [YOUR_NAME]
- git config --global user.email [YOUR_EMAIL]
- git config --global core.ignorecase false

### 按照自己的习惯和喜好的配置
- git config --global push.default current
- git config --global alias.co checkout
- git config --global alias.ci commit
- git config --global alias.br branch
- git config --global alias.rb rebase
- git config --global alias.lg=log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit


## 基本场景：
### 新拉取项目

```ts
git clone git@code.org:ecom/XXXX.git
```
### 新建分支

```ts
// 从当前分支新建
git checkout -b NEW_BRANCH_NAME
// 基于远端分支新建分支
git checkout -b NEW_BRANCH_NAME origin/REMOTE_BRANCH_NAME(远程分支名称)
```
### 推送代码至远端分支
``` ts
git push origin REMOTE_BRANCH_NAME
```
### 拉取远端变更
``` ts
// 拉取远端所有变更
git fetch
// 把远程分支上的内容都拉取到本地
git pull origin REMOTE_BRANCH_NAME [--rebase]
```

### 合并远程分支到本地
``` ts 
常见于远程的 master 或其他分支有变更，而且这部分变更需要合入当前分支。（此处以 master 为例）
git checkout master
git pull --rebase
git checkout YOUR_BRANCH
git rebase master (此处也可以使用 merge)
// rebase 之后，将代码 push 到远端，由于此处改变了当前分支的提交历史，因此可能需要 --force-with-lease
git push origin YOUR_BRANCH --force-with-lease
```

### 合并分支到 master


### 配置远程目录
``` jsx
git remote add origin git@code.org:ecom/XXX.git
```

### 新建项目

``` jsx
// 1. 新建 .git 文件
git init
// 2. 配置远程目录
git remote add origin git@code.org:ecom/XXX.git
// 3. 推送文件至远端的 master 分支（完成后需要去远端设置 master 为受保护分支）
git push -u origin master
```

### git Revert
[git Revert](https://segmentfault.com/a/1190000012897697)

``` js
  git revert <commit id>
  拿到刚刚revert的commit id
  再进行revert
  然后就能拿到之前被revert的代码
```

### commitizen
[commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)

``` js
yarn global add commitizen cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
----
git add . 
git cz
```

### git学习
[git场景常用](https://github.com/k88hudson/git-flight-rules)

[git练习](https://learngitbranching.js.org/?locale=zh_CN)

[git异常处理清单](https://www.zoo.team/article/git-exception)

### git reset --慎用
``` jsx
git reset --soft  HEAD~1   //  撤销git commit 
git reset --mined HEAD~2 //撤销 git add git commit 
git rest --hard HEAD~1
//已追踪文件的变更内容都消失了，撤销了 commit 和 add 的操作，同时撤销了本地已追踪内容的修改；未追踪的内容不会被改变。从上面的效果可以看到，文件的修改都会被撤销。-hard 参数需要谨慎使用。
```
## .gitignore
### .gitignore不生效
``` js
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

### git alias
`
它的基本用法是 git config --global alias.<简化的字符> 原始命令
`