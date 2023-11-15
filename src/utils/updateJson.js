import fs from 'fs';

const fileSrcPath = './src/utils/fakeData.json';

const existingContent = fs.readFileSync(fileSrcPath, 'utf-8');
const jsonData = JSON.parse(existingContent);

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1684407616836-7943cf1f3192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
];

const colors = [
  'tomato',
  'orange',
  'dodgeBlue',
  'mediumSeaGreen',
  'gray',
  'slateBlue',
  'violet',
  'lightGray',
];

const generateImagesArray = () => {
  const indexes = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * images.length)
  );
  return indexes.map((index) => images[index]);
};

const generateColorsArray = () => {
  const indexes = Array.from({ length: Math.ceil(Math.random() * 3) }, () =>
    Math.floor(Math.random() * colors.length)
  );
  return indexes.map((index) => colors[index]);
};

const employeesSocialMedia = {
  tw: 'https://twitter.com',
  ig: 'https://www.instagram.com/',
  li: 'https://www.linkedin.com',
};

function updateContent(jsonData) {
  jsonData.products.forEach((product) => {
    product.images = generateImagesArray();
    product.colors = generateColorsArray();
    product.id = Math.random().toString(16).slice(2);
  });
  jsonData.orders.forEach((order) => {
    order.images = generateImagesArray();
    order.colors = generateColorsArray();
    order.id = Math.random().toString(16).slice(2);
    order.quantity = Math.ceil(Math.random() * 5);
  });
  jsonData.employees.forEach((employee) => {
    employee.socialMedia = employeesSocialMedia;
    employee.id = Math.random().toString(16).slice(2);
  });
  return jsonData;
}

const updatedContent = updateContent(jsonData);

fs.writeFileSync(fileSrcPath, JSON.stringify(updatedContent, null, 2));
console.log(JSON.stringify(updatedContent, null, 2));
