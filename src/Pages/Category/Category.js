import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Category has {categoryNews.length} news</h2>
            {
                categoryNews.map(news => <NewsCard key={categoryNews._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;