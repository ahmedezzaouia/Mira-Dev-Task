# Shopify 100-Variant Limitation Solution

## 🔗 Dev Store Preview

Test the implementation directly in the dev store:  
- **Preview Link:** https://miradevtest.myshopify.com/ 
- **Password:** Mira

## 📌 Overview

This solution solves Shopify’s **100-variant limitation** by making multiple products behave like a single product.  
To enable it, simply turn on the **"Use metafield for colors"** setting.

<img width="350" height="350" alt="image" src="https://github.com/user-attachments/assets/e632d2ac-9124-4591-8f7d-dca1d4515a06" />

<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/f00940e8-d77b-4a8d-9f4c-d039bb96b772" />


### Two Approaches Available
1. **Collection-based approach** – Automatically links products via a collection using smart matching with tags.  
   ✅ Recommended for large stores because it’s efficient and scalable.  

2. **Product list approach** – Links products manually via the **Related Products** metafield.  
   ⚠️ Works but requires updating each product individually, which can be error-prone.  

All functionality is built into **variant-picker.liquid** file, reusing existing theme styles & functionality instead of reinventing the wheel.  

👉 During testing, the implementation achieved a **CLS score of 0**, ensuring stable layout and better SEO/accessibility.  

<img width="674" height="208" alt="image" src="https://github.com/user-attachments/assets/2667d8ae-deae-4134-bd8f-abe40b20285d" />

---

## 🎁 Bonuses / Additional Features

- **Swatch Color Metafield**  
  Displays product colors visually using the existing **Swatches** setting in **variant-picker.liquid**.  
  If a product lacks a **"Swatch Color"** metafield, its title is displayed instead.  

  <img width="347" height="110" alt="image" src="https://github.com/user-attachments/assets/8fa28834-d9b8-4067-a953-3f377707cb28" />

- **Smooth Product Updates (Section Rendering API)**  
  Customers can switch options **without page reload**. Controlled via the **Enable smooth product updates** setting, it dynamically refreshes the product section with animation.

---

## 🚀 1. Collection-based Approach (Recommended)

This approach uses a product metafield called **Color Products Collection**, which links products via **smart matching with a tag** (e.g., `T-Shirt` for color variations, though any tag can be used).

### To enable for a product:
1. Turn on **Use metafield for colors** setting in **variant-picker** block.  
2. Select **Collection-based approach** in the "Color organization approach" setting   
3. Link the **"Color Products Collection"** metafield on each product to the relevant collection.  

✅ Once set up, all products in the collection are automatically connected, making management simple and automated.

---

## 🔗 2. Product List Approach

This approach uses the **"Related Products"** metafield to manually link products. It gives you **full manual control** over which products should appear as color variations or related options.  

### To enable for a product:
1. Turn on **Use metafield for colors** setting in **variant-picker** block.  
2. Select **Product list approach** in the "Color organization approach" setting 
3. In the **Related Products** metafield, **add the other product pages (for example, different colors) that you want customers to see as options for this product.**  

⚠️ This method works but requires updating each product individually, which can be time-consuming for large stores.  
Best suited for smaller catalogs or when you need precise control.

---

## 🗂️ Metafields Created

| **Metafield**               | **Purpose / Role** |
|------------------------------|--------------------|
| **Color Products Collection** | Links a product to a collection of related products (for grouping color variations). |
| **Related Products**         | Links specific products directly for manual grouping. |
| **Swatch Color**             | Displays the product color visually as a swatch instead of just the title. |

---

## 🎥 Explainer Video

For a quick walkthrough of setup and functionality, watch the video below:  

👉 [**Watch the Explainer Video**](https://jam.dev/c/6942983b-6283-46bc-87ce-633f00eaa755)

This video demonstrates:  
- How to enable the feature  
- How to link products  
- How smooth product updates work in action  

---
