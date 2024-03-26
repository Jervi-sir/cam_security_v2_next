import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPBASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export const getRandomData = async (limit:number = 4) => {
 const { data, error } = await supabaseClient
  .rpc('get_random_products', { limit_count: limit })

  if (error) {
    console.error('query error:', error);
  } else {
    return (data); // Your random results with joined data
  }
}

export const getRandomArticles = async (limit: number = 4) => {
  const { data, error } = await supabaseClient
    .rpc('get_random_articles', { limit_count: limit })
  if (error) {
    console.error('query error:', error);
  } else {
    return (data); 
  }
}


export const getThisProduct = async (item_id: number) => {
  const { data, error } = await supabaseClient
    .rpc('get_this_product', { product_id: item_id });

    if (error) {
      console.error('query error:', error);
    } else {
      return (data[0]); // Your random results with joined data
    }
}

export const getRelatedProducts = async (item_id: number, limit:number = 4) => {
  const { data, error } = await supabaseClient
    .rpc('get_related_products', {product_id: item_id, limit_count: limit})

  if (error) {
    console.error('query error:', error);
  } else {
    return (data); 
  }
}

export const getProducts = async (page_offset: number = 0, page_limit: number = 4, category_id: number | null = null) => {
  const { data, error } = await supabaseClient
    .rpc('get_products_by_category', {page_offset: page_offset, page_limit: page_limit, input_category_id: category_id})
  
  if (error) {
    console.error('query error:', error);
  } else {
    return (data); 
  }
}



/*
 const { data, error } = await supabaseClient
.from('products') // Replace with your first table name
.select(`
  id,
  title,
  price,
  quantity,
  images,
  description,
  characteristics,
  brands (
    name
  ),
  categories (
    name
  )
`) 
.order('random()')
.limit(limit)
//.execute();
*/