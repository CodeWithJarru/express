const express = require('express');
const path = require('path');
const blogs = require('./data/blogs.js');
        const blogList = document.getElementById('blog');
        blogs.forEach(blog => {
            const blogItem = document.createElement('a');
            blogItem.className = 'dropdown-item';
            blogItem.innerHTML = `<a href='https://localhost:3000/blogpost/${blog.slug}'>${blog.title}</a>`;
            blogList.appendChild(blogItem);
        });