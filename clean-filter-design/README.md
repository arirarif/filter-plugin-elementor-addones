# Clean Tire Filter Design

A clean, modern tire filter interface based on the design specification from `filter.png`.

## 📁 Project Structure

```
clean-filter-design/
├── index.html          # Main HTML structure
├── style.css           # Complete styling
├── script.js           # Interactive functionality
└── README.md          # Documentation
```

## 🎨 Design Features

### Header Section
- **Vehicle Type Selector**: Three options (Car, Motorcycle, Transporter) with icons
- **Toggle Switch**: Switch between "By size" and "By car model" search modes
- **Help Icons**: Two help buttons for user assistance

### Main Content
- **Tire Visualization**: SVG graphic showing a tire with dynamic size display
- **Size Selection**: Three dropdown fields (WIDTH, HEIGHT, CUSTOMS)
- **Season Selector**: Three options (Summer, Winter, All-season) with icons
- **Submit Button**: Large orange "FIND TIRES" button

## 🎯 Key Design Elements

### Color Scheme
- **Primary Background**: `#3a3a3a` (Dark Gray)
- **Secondary Background**: `#2d2d2d` (Darker Gray)
- **Accent Color**: `#ff8c00` (Orange)
- **Text Color**: `#ffffff` (White)

### Typography
- Font Family: Arial, sans-serif
- Font Weights: Regular (400), Semi-bold (600), Bold (700)

### Interactive Elements
- Radio buttons for vehicle type and season selection
- Toggle switch for search mode
- Dropdown selects for tire dimensions
- Hover effects on all interactive elements
- Smooth transitions and animations

## 🚀 Features

### 1. Dynamic Tire Size Display
The tire size text updates in real-time as you change the WIDTH, HEIGHT, and CUSTOMS values.

### 2. Vehicle Type Selection
Select between:
- Car (default)
- Motorcycle
- Transporter

### 3. Season Selection
Choose your tire season:
- Summer
- Winter (default)
- All-season

### 4. Search Mode Toggle
Switch between two search modes:
- By size (default)
- By car model

### 5. Responsive Design
The design adapts to different screen sizes:
- Desktop: Full 600px width
- Mobile: Stacked layout with adjusted sizing

## 💻 Usage

### Opening the Filter
Simply open `index.html` in your web browser.

### Selecting Tire Size
1. Choose your vehicle type at the top
2. Select WIDTH, HEIGHT, and CUSTOMS from the dropdowns
3. Watch the tire graphic update with your selection
4. Choose your preferred season
5. Click "FIND TIRES" to submit

### Toggle Search Mode
Click the toggle switch in the header to switch between:
- **By size**: Direct tire dimension selection
- **By car model**: Vehicle-based search (to be implemented)

## 🔧 Customization

### Adding More Tire Sizes
Edit the `<select>` options in `index.html`:

```html
<select id="width" name="width">
    <option value="205">205</option>
    <!-- Add more options here -->
</select>
```

### Changing Colors
Modify the CSS variables in `style.css`:

```css
/* Change the accent color */
.form-field label {
    background: #ff8c00;  /* Change this */
}

.submit-btn {
    background: #ff8c00;  /* And this */
}
```

### Form Submission
Update the form handler in `script.js`:

```javascript
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Add your custom form submission logic here
    // Example: send data to your API
    fetch('/api/search-tires', {
        method: 'POST',
        body: JSON.stringify(formData)
    });
});
```

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎪 Animations

The design includes several smooth animations:
- Fade-in on page load
- Hover effects on buttons and selects
- Toggle switch transition
- Season selector scaling
- Button press effects

## 📋 Form Data Structure

When submitted, the form collects:

```javascript
{
    vehicleType: "car" | "motorcycle" | "transporter",
    width: string,
    height: string,
    customs: string,
    season: "summer" | "winter" | "allseason",
    searchType: "size" | "car-model"
}
```

## 🔄 Future Enhancements

Potential additions:
1. **Car Model Search**: Implement the "By car model" search functionality
2. **Backend Integration**: Connect to a tire database API
3. **Price Range Filter**: Add price filtering options
4. **Brand Selection**: Allow filtering by tire brand
5. **Load Index & Speed Rating**: Add advanced tire specifications
6. **Comparison Tool**: Compare multiple tire options
7. **Localization**: Multi-language support

## 🐛 Known Issues

None at this time.

## 📝 Notes

- The design closely follows the specification in `filter.png`
- All code is clean, semantic, and well-commented
- The structure is modular and easy to extend
- SVG icons are embedded as data URIs for better performance
- No external dependencies required

## 📄 License

Free to use and modify for your project.

## 👨‍💻 Development

To customize or extend this filter:

1. **HTML** (`index.html`): Modify structure and content
2. **CSS** (`style.css`): Adjust styling and responsive behavior
3. **JavaScript** (`script.js`): Add or modify interactive functionality

All files are thoroughly commented to guide your development.

---

**Created**: 2025-12-12
**Version**: 1.0
**Based on**: filter.png design specification
