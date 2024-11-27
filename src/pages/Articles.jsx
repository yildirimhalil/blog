// React kitaplığını ve örnek veri dosyasını içe aktarıyoruz.
import React from 'react';
import articles from '../data/articles'; // Makale verilerinin bulunduğu dosyayı çağırıyoruz.
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Articles = () => {


  return (
    <div className="mt-10" >
      {/* Sayfa başlığı */}
      <motion.h1 
        className="text-center text-2xl font-bold"
        initial={{ opacity: 0, y: 10}}
        animate={{ opacity: 1, y: 0}}
        transition={{duration: 0.9}}
      >
        Makale Listesi
      </motion.h1>
      <div className="mt-5">
        {/* Her bir makaleyi listelemek için "map" fonksiyonunu kullanıyoruz. */}
        {articles.map((article, index) => (
            <motion.div 
              className="border p-4 mb-4 rounded-lg shadow-md max-w-4xl mx-auto hover:scale-105 hover:border-blue-300"
              initial={{ opacity: 0, y: 10}}
              animate={{ opacity: 1, y: 0}}
              transition={{delay: index * 0.2, duration: 0.9}}
            >
          <Link
            to={`/articles/${article.id}`}
            key={article.id} // Her bir makale için benzersiz bir anahtar (React performansı için gerekli)
            
          >
            {/* Makale başlığı */}
            <h2 className="text-xl font-semibold  hover:text-blue-500 hover:underline">{article.title}</h2>
            {/* Makale içeriğinin sadece ilk 50 karakterini gösteriyoruz */}
            <p className="mt-2">{article.content.slice(0, 50)}...</p>
            {/* Makale yazar bilgisi */}
            <p className="mt-4 text-gray-600 text-sm">Yazarı: {article.author}</p>
          </Link>

            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Articles; // Bileşeni dışa aktarıyoruz.
