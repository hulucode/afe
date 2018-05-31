<p style="color:red;">前端代码由独立git项目管理，不可与后端共用一个git项目</p>

1. 由前端负责人在gitlab上创建项目;  

2. 由前端负责人负责添加其他开发人员;  

3. master权限不可随意分配（这会影响未来的代码review流程）。  

<p style="color:red;">创建开发、测试和发布分支，建立代码review流程</p>

1. dev 开发分支：所有开发成员必须基于此分支创建出自己的分支来开发新代码，后期合并到此分支，定期做代码review;
    - 个人分支合并到dev分支的时候 ，先用个人分支merge dev分支;

    - 如果有冲突，在个人分支上先解决掉，然后再合并到dev分支上去！

2. test 测试分支：此分支由测试人员管理，测试人员会从dev分支合并到此分支进行测试工作；

3. master 生产分支：此分支为生产代码的分支，将把test分支合并到此分支，在合并之前会做代码review。

<p style="color:red;">开发人员不可以向dev分支合并有错误或异常的代码，请确保在合并代码之前排除了所有的错误或异常</p>

### 安装 git
请根据自己的系统查找安装方法。

### 常用 git 命令

1. git init  
初始化一个目录，其实就是加了一个.git的隐藏目录

2. git clone  
远程复制一个完整的repository到本地，比如git clone git://github.com/xxx/xxx.git，就是从git://github.com/xxx/xxx.git这个地址clone到本地当前目录。

3. git add  
把一个文件从change->staged状态。git add test.txt。注意，不仅仅是添加新文件，修改现有文件也要git add来修改状态，否则git不会考虑将之commit。（当然可以git commit -a省力点）

4. git status  
刚添加完，还没commit，这时候就能用git status -s看看当前修改和仓库里面差别多少，可以看到有多少文件被新增了，多少被修改了，多少被删除了。加个-s用简洁模式查看。一般在git commit之前看一把。

5. git diff  
不加参数比较当前修改的文件和上次commit在仓库里面的区别。git diff develop，查看当前版本和develop分支的差异。如果想比较某个目录下的文件，可以用git diff -- ./libs，这个只比较libs目录下的文件。

6. git commit  
git commit -m 'message here'。提交到仓库，必须要一个message。如果嫌每次都是先git add，再git commit，很麻烦的话，直接git commit -am 'message'，带上-a后全部一把进去。

7. git log  
查看提交记录。只想看某个分支的话，git log develop。带上--oneline用简洁模式查看。

8. git reset  
撤销某次提交。最普通用法，git reset HEAD -- file，将某个文件从staged状态->unstaged状态，这文件也不能被commit了。git reset --hard HEAD~1，回退到当前HEAD之前的一个版本。

9. git branch  
不带任何参数，就是看当前目录有多少分支，默认init后一般会有一个master。git branch develop，创建一个develop分支。git branch -d develop，删除develop分支。-D参数则表示不管有没有merge过，都强制删除。

10. git checkout  
快速切换分支，比如git checkout develop，马上切换到develop分支。这个地方我觉得git很牛逼，不用换目录，立马换一套context。

11. git tag  
git tag -a v1.0，将最后一次commit（HEAD）标记为永久的v1.0版本。如果要给以前某次commit打tag，也可以加上提交的版本号就行（版本号可以通过git log --online看到）

12. git remote  
列出所有的远程仓库。从别处clone来的，默认都会有一个别名"origin"的仓库。带上-v可以看到具体URL。git remote add/rw，添加/删除远程仓库地址。其实这些操作都是在本地，并没有实际牵涉到远程。另外github里面folk过来的，默认叫"upstream"。

13. git fetch  
从远程下载分支。git fetch upstream A:B，将远程仓库upstream下的A分支下载到本地，本地叫B分支。如果不带A:B参数，则下载以后，可能会叫upstream/A（如果远程是A分支的话），远程分支要通过git branch -r查看。一般的做法是先git fetch upstream master:tmp（将远程的master先下载到本地的tmp分支，然后git diff tmp看看本地master和tmp的区别，没问题的话再git merge tmp。这样比直接git pull upstream来的安全。

14. git pull  
同fetch，只是下载以后，直接进行merge。比如git pull upstream master，就直接将upstream下载下来，与本地的master合并。

15. git push  
git push origin A:B，将本地的A分支push到远程仓库origin下，并叫做B。如果省略:B，那么一般本地和远程的分支同名。特殊情况：删除远程分支可用通过push一个本地空分支来做到。git push origin :B，push一个空分支到origin下的B，即删除了远程分支B。

### 常用工具推荐

 1. <a href="https://www.sourcetreeapp.com" target="_blank">可视化git操作工具 SourceTree</a>

 2. <a href="https://www.iterm2.com/" target="_blank">命令行工具 Iterm2</a>