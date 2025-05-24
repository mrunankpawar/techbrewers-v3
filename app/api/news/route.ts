// import { NextResponse } from 'next/server';

// const NEWS_API_KEY = process.env.NEWS_API_KEY;
// const BASE_URL = 'https://newsapi.org/v2';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const techOnly = searchParams.get('techOnly') === 'true';
  
//   try {
//     // Calculate date 3 days ago
//     const threeDaysAgo = new Date();
//     threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
//     const fromDate = threeDaysAgo.toISOString().split('T')[0];
    
//     const query = techOnly 
//       ? 'technology OR AI OR artificial intelligence OR machine learning OR programming OR software OR hardware OR cybersecurity OR blockchain OR cloud computing OR quantum computing OR robotics OR virtual reality OR augmented reality OR metaverse OR web3 OR cryptocurrency OR coding OR developer OR tech startup OR innovation'
//       : 'technology';
    
//     const response = await fetch(
//       `${BASE_URL}/everything?q=${encodeURIComponent(query)}&from=${fromDate}&sortBy=publishedAt&language=en&pageSize=30&apiKey=${NEWS_API_KEY}`
//     );

//     if (!response.ok) {
//       throw new Error('Failed to fetch news');
//     }

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch news' },
//       { status: 500 }
//     );
//   }
// } 