import ProductDetailCard from "../../components/ProductDetailCard";
import { getProduct, getProducts } from "../../utils/api";

function Sticker({ ...props }) {
  const { product } = props;
  return <ProductDetailCard item={product} />;
}

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => {
    return { params: { id: product.id.toString() } };
  });
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.id);

  return { props: { product }, revalidate: 1000 };
}

export default Sticker;
