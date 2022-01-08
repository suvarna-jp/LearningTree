# Angular for Beginners

## Reference link
-----------------

https://www.youtube.com/watch?v=W5dEbsHrb9k


## Angular Installation | Steps
-------------------------------

##### 1. Install NodeJS from `https://nodejs.org/en/download/`
###### 1.1) Check installation by typing (in a cmd terminal) -- `node -v`
  If installed successfully, it displays the version of node installed.
  Like,
  ```
  C:\Users\Suvarna Joshi>node -v
  v12.18.0
  ```
##### 2. Install typescript using `npm install -g typescript`
  You should be able to see something like,
  
  ```
  C:\Users\Suvarna Joshi>npm install -g typescript
  C:\Users\Suvarna Joshi\AppData\Roaming\npm\tsc -> C:\Users\Suvarna Joshi\AppData\Roaming\npm\node_modules\typescript\bin\tsc
  C:\Users\Suvarna Joshi\AppData\Roaming\npm\tsserver -> C:\Users\Suvarna Joshi\AppData\Roaming\npm\node_modules\typescript\bin\tsserver
  + typescript@4.5.4
  added 1 package from 1 contributor in 2.177s
  ```
  
###### 2.1) Check if Typescript has been installed properly, type `tsc -v` 

  You may see something like this below,
  ```
  C:\Users\Suvarna Joshi>tsc -v
  Version 4.5.4
  ```
##### 3. Install Angular using `npm install -g @angular/cli`

  Like,
  ```
  C:\Users\Suvarna Joshi>npm install -g @angular/cli
  C:\Users\Suvarna Joshi\AppData\Roaming\npm\ng -> C:\Users\Suvarna Joshi\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng.js

  > @angular/cli@13.1.2 postinstall C:\Users\Suvarna Joshi\AppData\Roaming\npm\node_modules\@angular\cli
  > node ./bin/postinstall/script.js
  ? Would you like to share anonymous usage data with the Angular Team at Google under
  Google’s Privacy Policy at https://policies.google.com/privacy? For more details and
  how to change this setting, see https://angular.io/analytics. No
  npm WARN notsup Unsupported engine for @angular/cli@13.1.2: wanted: {"node":"^12.20.0 || ^14.15.0 || >=16.10.0","npm":"^6.11.0 || ^7.5.6 || >=8.0.0","yarn":">= 1.13.0"} (current: {"node":"12.18.0","npm":"6.14.4"})
  npm WARN notsup Not compatible with your version of node/npm: @angular/cli@13.1.2
  npm WARN notsup Unsupported engine for @angular-devkit/architect@0.1301.2: wanted: {"node":"^12.20.0 || ^14.15.0 || >=16.10.0","npm":"^6.11.0 || ^7.5.6 || >=8.0.0","yarn":">= 1.13.0"} (current: {"node":"12.18.0","npm":"6.14.4"})
  npm WARN notsup Not compatible with your version of node/npm: @angular-devkit/architect@0.1301.2
  npm WARN notsup Unsupported engine for @angular-devkit/core@13.1.2: wanted: {"node":"^12.20.0 || ^14.15.0 || >=16.10.0","npm":"^6.11.0 || ^7.5.6 || >=8.0.0","yarn":">= 1.13.0"} (current: {"node":"12.18.0","npm":"6.14.4"})
  npm WARN notsup Not compatible with your version of node/npm: @angular-devkit/core@13.1.2
  npm WARN notsup Unsupported engine for @angular-devkit/schematics@13.1.2: wanted: {"node":"^12.20.0 || ^14.15.0 || >=16.10.0","npm":"^6.11.0 || ^7.5.6 || >=8.0.0","yarn":">= 1.13.0"} (current: {"node":"12.18.0","npm":"6.14.4"})
  npm WARN notsup Not compatible with your version of node/npm: @angular-devkit/schematics@13.1.2
  npm WARN notsup Unsupported engine for @schematics/angular@13.1.2: wanted: {"node":"^12.20.0 || ^14.15.0 || >=16.10.0","npm":"^6.11.0 || ^7.5.6 || >=8.0.0","yarn":">= 1.13.0"} (current: {"node":"12.18.0","npm":"6.14.4"})
  npm WARN notsup Not compatible with your version of node/npm: @schematics/angular@13.1.2

  + @angular/cli@13.1.2
  added 183 packages from 134 contributors in 108.61s
  ```
  
  ###### 3.01) After `upgrading Node.js version to 16.13.1 version`,
  
  ```
    C:\Users\Suvarna Joshi>node -v
    v16.13.1
  ```
  
  ###### 3.02) Updated Angular installation again...
  
  ```
  C:\Users\Suvarna Joshi>npm install -g @angular/cli

changed 183 packages, and audited 184 packages in 21s

22 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm notice
npm notice New minor version of npm available! 8.1.2 -> 8.3.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.3.0
npm notice Run npm install -g npm@8.3.0 to update!
npm notice
```
  
###### 3.03) Updated npm install as it had prompted above: (using `npm install -g npm@8.3.0`)

```
C:\Users\Suvarna Joshi>npm install -g npm@8.3.0

added 2 packages, and audited 39 packages in 5s

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.


C:\Users\Suvarna Joshi>npm audit
found 0 vulnerabilities

C:\Users\Suvarna Joshi>npm audit fix

up to date, audited 1 package in 361ms

found 0 vulnerabilities

```

###### 3.1) Check if Angular was installed properly, using `ng version`

Like,
```
C:\Users\Suvarna Joshi>ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 13.1.2
Node: 16.13.1
Package Manager: npm 8.3.0
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1301.2 (cli-only)
@angular-devkit/core         13.1.2 (cli-only)
@angular-devkit/schematics   13.1.2 (cli-only)
@schematics/angular          13.1.2 (cli-only)

```

4. We shall use VSCode as Editor. [VSCode Download available @ https://code.visualstudio.com/download]

## Angular Start New Angular Project | Steps
---------------------------------------------

5. To start a new Angular project, use `ng new <project_name>`
  ##### 5.1) When prompted `? Would you like to add Angular routing?`, type `Yes`

  Like,
  ```
  C:\Users\Suvarna Joshi\Documents\SuvWorkProjects\PersonalLearning\AngularProjects\MyFirstAngularProject>ng new MyFirstAngularProjDemo
  ? Would you like to add Angular routing? Yes
  ? Which stylesheet format would you like to use? (Use arrow keys)
  > CSS
    SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
    Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
    Less   [ http://lesscss.org

   ```
   
   ##### 5.2) When prompted `? Which stylesheet format would you like to use?` Type `CSS` (default option if not specific about any particular stylesheet)
   
   ```
    CREATE MyFirstAngularProjDemo/angular.json (3139 bytes)
    CREATE MyFirstAngularProjDemo/package.json (1090 bytes)
    CREATE MyFirstAngularProjDemo/README.md (1068 bytes)
    CREATE MyFirstAngularProjDemo/tsconfig.json (863 bytes)
    CREATE MyFirstAngularProjDemo/.editorconfig (274 bytes)
    CREATE MyFirstAngularProjDemo/.gitignore (620 bytes)
    CREATE MyFirstAngularProjDemo/.browserslistrc (600 bytes)
    CREATE MyFirstAngularProjDemo/karma.conf.js (1443 bytes)
    CREATE MyFirstAngularProjDemo/tsconfig.app.json (287 bytes)
    CREATE MyFirstAngularProjDemo/tsconfig.spec.json (333 bytes)
    CREATE MyFirstAngularProjDemo/.vscode/extensions.json (130 bytes)
    CREATE MyFirstAngularProjDemo/.vscode/launch.json (474 bytes)
    CREATE MyFirstAngularProjDemo/.vscode/tasks.json (938 bytes)
    CREATE MyFirstAngularProjDemo/src/favicon.ico (948 bytes)
    CREATE MyFirstAngularProjDemo/src/index.html (308 bytes)
    CREATE MyFirstAngularProjDemo/src/main.ts (372 bytes)
    CREATE MyFirstAngularProjDemo/src/polyfills.ts (2338 bytes)
    CREATE MyFirstAngularProjDemo/src/styles.css (80 bytes)
    CREATE MyFirstAngularProjDemo/src/test.ts (745 bytes)
    CREATE MyFirstAngularProjDemo/src/assets/.gitkeep (0 bytes)
    CREATE MyFirstAngularProjDemo/src/environments/environment.prod.ts (51 bytes)
    CREATE MyFirstAngularProjDemo/src/environments/environment.ts (658 bytes)
    CREATE MyFirstAngularProjDemo/src/app/app-routing.module.ts (245 bytes)
    CREATE MyFirstAngularProjDemo/src/app/app.module.ts (393 bytes)
    CREATE MyFirstAngularProjDemo/src/app/app.component.html (23364 bytes)
    CREATE MyFirstAngularProjDemo/src/app/app.component.spec.ts (1121 bytes)
    CREATE MyFirstAngularProjDemo/src/app/app.component.ts (226 bytes)
    CREATE MyFirstAngularProjDemo/src/app/app.component.css (0 bytes)
    √ Packages installed successfully.
    warning: LF will be replaced by CRLF in .browserslistrc.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in .editorconfig.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in .gitignore.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in .vscode/extensions.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in .vscode/launch.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in .vscode/tasks.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in README.md.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in angular.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in karma.conf.js.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in package-lock.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in package.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/app/app-routing.module.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/app/app.component.html.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/app/app.component.spec.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/app/app.component.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/app/app.module.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/environments/environment.prod.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/environments/environment.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/index.html.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/main.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/polyfills.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/styles.css.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in src/test.ts.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in tsconfig.app.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in tsconfig.json.
    The file will have its original line endings in your working directory
    warning: LF will be replaced by CRLF in tsconfig.spec.json.
    The file will have its original line endings in your working directory
        Successfully initialized git.
   ```

