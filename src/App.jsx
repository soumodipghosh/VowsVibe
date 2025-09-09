import { Header } from './components/Header/Header';
import { ProductImages } from './components/ProductDetail/ProductImages';
import { ProductInfo } from './components/ProductDetail/ProductInfo';
import { CustomerReviews } from './components/ProductDetail/CustomerReviews';
import { RelatedProducts } from './components/ProductDetail/RelatedProducts';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <Header />

      {/* Product Detail Section */}
      <main className="py-8 lg:py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductImages />
            <ProductInfo />
          </div>
        </div>
      </main>

      {/* Customer Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CustomerReviews />
        </div>
      </section>

      {/* Related Products Sections */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedProducts title="Similar to this" />
        <RelatedProducts title="Top Picks for You" />
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
