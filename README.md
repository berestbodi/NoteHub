Here is a matching, stylized **README.md** for your **NoteHub** project. Since this project is more advanced (featuring Next.js 16 and Authentication), I've highlighted the security and server-side features.

---

# 📝 NoteHub

### *Secure, smart, and seamless note management*

**NoteHub** is a high-performance personal note-taking application. It goes beyond simple CRUD by implementing professional-grade authentication, server-side route protection, and optimized data management.

---

### 🚀 Tech Stack

This project showcases the cutting edge of the Next.js ecosystem:

| Category | Tools & Technologies |
| --- | --- |
| **Framework** | **Next.js 16 (App Router)** 🚀, **React 19** ⚛️ |
| **Authentication** | **JWT**, **Middleware (Edge Runtime)** 🛡️ |
| **State & Data** | **Zustand** 🐻, **TanStack Query (v5)** 🔄 |
| **Forms** | **React 19 Form Actions**, **Formik** 📝 |
| **API** | **Axios** 📡 |

---

### ✨ Technical Highlights

#### 🔒 Advanced Security & Auth

* **Edge Middleware:** Implemented server-level route protection to keep private notes secure.
* **Auto-Refresh Logic:** Integrated a smart **JWT Refresh Token** system within the middleware to ensure sessions stay active without interrupting the user.
* **Cookie Management:** Secure, server-side handling of access and refresh tokens.

#### ⚡ Performance & Optimization

* **React 19 Form Actions:** Leveraged the newest React features for faster, more efficient note creation and updates.
* **Server-State Management:** Used **TanStack Query** for instant caching, background fetching, and smooth server-side pagination.
* **Global State:** **Zustand** provides a lightweight and lightning-fast global store for user data.

#### 🔍 User Experience (UX)

* **Real-time Search:** Integrated **debounced search** to filter through notes instantly without overloading the API.
* **Tag Filtering:** Easily organize and find notes by category.
* **Responsive Design:** Fully optimized with **CSS Modules** for a clean, mobile-friendly interface.

---

### 🛠 Installation

1. **Clone the repo:**
```bash
git clone https://github.com/berestbodi/NoteHub.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Set up Environment Variables:**
Create a `.env.local` file and add your API URL:
```env
NEXT_PUBLIC_API_URL=your_api_endpoint

```


4. **Launch the app:**
```bash
npm run dev

```

---

> Check out the live demo here: [09-auth-rho-ten.vercel.app](https://09-auth-rho-ten.vercel.app/) 🌍

---
