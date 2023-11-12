interface Category {
    id: number;
    name: string;
    image: '',
  }

const fetchCategoryData = async () => {
try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }

    const data: Category[] = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching data:', error);
}
};

export { fetchCategoryData };
export type { Category };
