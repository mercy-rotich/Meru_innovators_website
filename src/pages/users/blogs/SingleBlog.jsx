import React from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PageLayout from "../PageLayouts/PageLayout";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SubHero from "../../../components/users/Hero/SubHero";

const blogData = {
  id: 1,
  title: "Exploring Python for Data Science",
  category: "Python",
  author: "Jane Doe",
  date: "July 28, 2024",
  content: `
### Introduction  
Python is a powerful programming language widely used in **data science, machine learning, and AI**. In this article, we will explore some key concepts.

### Getting Started with Pandas  
To analyze data efficiently, we use the **Pandas library**:

\`\`\`python
import pandas as pd

# Load dataset
df = pd.read_csv("data.csv")

# Display first 5 rows
print(df.head())
\`\`\`

### Visualizing Data with Matplotlib  
Matplotlib allows us to plot data easily:

\`\`\`python
import matplotlib.pyplot as plt

# Create a simple line plot
x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]
plt.plot(x, y, marker="o")
plt.xlabel("X Axis")
plt.ylabel("Y Axis")
plt.title("Simple Line Plot")
plt.show()
\`\`\`

### Numerical Computing with NumPy  
NumPy provides powerful numerical operations:

\`\`\`python
import numpy as np

# Create an array
a = np.array([1, 2, 3, 4, 5])
print(a * 2)  # Multiply each element by 2
\`\`\`

### Data Visualization with Seaborn  
Seaborn makes statistical data visualization easier:

\`\`\`python
import seaborn as sns
import matplotlib.pyplot as plt

# Load sample dataset
df = sns.load_dataset("penguins")

# Create a scatter plot
sns.scatterplot(x="bill_length_mm", y="bill_depth_mm", hue="species", data=df)
plt.show()
\`\`\`

### Machine Learning with Scikit-Learn  
Scikit-Learn helps implement machine learning algorithms:

\`\`\`python
from sklearn.linear_model import LinearRegression
import numpy as np

# Training data
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([10, 20, 30, 40, 50])

# Train model
model = LinearRegression()
model.fit(X, y)

# Predict
y_pred = model.predict(X)
print(y_pred)
\`\`\`

### Conclusion  
Python provides **powerful libraries** for data analysis and visualization. Start experimenting with **Pandas, NumPy, Seaborn, and Scikit-Learn** to gain insights from your data.
  `,
};

const SingleBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <PageLayout>
        <SubHero title={"BLOGS"} />
        <div
          className="container mx-auto pt-[4rem] px-4 sm:px-8 py-12 max-w-3xl"
          style={{ paddingTop: "2rem" }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blogs
          </button>

          <motion.div
            className="bg-white p-6 rounded-sm shadow-lg border border-neutral-200 mb-[3rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-800">
              {blogData.title}
            </h1>
            <div className="text-gray-500 text-sm mt-2">
              <span>{blogData.category} • </span>
              <span>{blogData.author} • </span>
              <span>{blogData.date}</span>
            </div>

            <div className="prose prose-lg max-w-none mt-6 text-gray-700">
              <ReactMarkdown
                children={blogData.content}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    return !inline ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language="python"
                        PreTag="div"
                        className="rounded-md"
                        showLineNumbers
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-200 text-red-600 px-1 py-0.5 rounded">
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
          </motion.div>
        </div>
      </PageLayout>
    </div>
  );
};

export default SingleBlog;
