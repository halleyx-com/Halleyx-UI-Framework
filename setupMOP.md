# **Halleyx Component**

## **Installation**
```
git clone https://github.com/halleyx-com/UI-kit.git
```


```
npm install

npm run serve
```
## **Component add procedure**
### File Structure
1. create your component under `\components` folder
2. suffix with component in file name and make it PascalCase. Like (`DropdownComponent.vue`)
3. make it use of it by importing them into `\view `folder
4. Views file name format Like be (`DropdownView.vue`)

### Route Config
1. Import connected view component from `\views` and config with path inside routes array in `router/index.js`
    ```
        {
            path: '/dropdown',
            name: 'dropdown',
            component: DropDown
        }
    ```
2. Finally add them into `App.js` inside of \<nav> element like
this 
```
 <nav>
    <router-link to="/dropdown">Dropdown</router-link> 
 </nav>
```



