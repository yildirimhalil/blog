// React ve React Router'dan gerekli işlevleri içe aktarıyoruz.
import React from 'react';
import { useParams } from 'react-router-dom'; // URL'deki parametreleri almak için kullanılır.
import articles from '../data/articles'; // Örnek veri dosyasını çağırıyoruz.

const ArticleDetail = () => {
  // URL'den "id" parametresini alıyoruz.
  const { id } = useParams();

  // İlgili makaleyi "articles" dizisinden buluyoruz.
  const article = articles.find((item) => item.id === parseInt(id));

  // Eğer makale bulunamazsa bir hata mesajı gösteriyoruz.
  if (!article) {
    return <div>Makale bulunamadı!</div>;
  }

  // Makale detaylarını gösteriyoruz.
  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="mt-4">{article.content}</p>
      <p className="mt-6 text-gray-600 text-sm">Yazarı: {article.author}</p>
    </div>
  );
};

export default ArticleDetail; // Bileşeni dışa aktarıyoruz.
