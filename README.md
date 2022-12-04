# Development

NOTE: the images appear on my local version of the webpage, but are having trouble on the deployed version.

### Link to Deployed Website
https://mysteryman444.github.io/developmentHW/

### Goal and Value of the Application
- This application is used to preview a bakery's menu and order items online. Customers can apply certains filters and sort orders to preview the content they desire.

### Usability Principles Considered
- The website has a plain layout that is easy to use. The text is large and easy to read and buttons stand out with blue shading.
### Organization of Components
Each  element of the bakedGoods array is passed through the bakeryItem component.

### How Data is Passed Down Through Components
- There is a bakeryItem component that defines the layout of each bakery item on the page. The main app applies each element of the bakedGoods array using a map function to the bakeryItem component to display them uniformly.

### How the User Triggers State Changes
- State changes are triggered every time an item is added to or removed from the cart, when a filter is applied/removed, or the desired method of item sorting is changed.

