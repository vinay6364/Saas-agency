import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock Supabase init (requires valid URL and KEY to work fully)
// const supabaseUrl = process.env.SUPABASE_URL || '';
// const supabaseKey = process.env.SUPABASE_KEY || '';
// const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SaaS Agency Backend is running' });
});

app.post('/api/leads', async (req, res) => {
  try {
    const { name, email, company, interest } = req.body;
    
    console.log('Received lead:', { name, email, company, interest });
    
    // Wait until db is completely set up by the user for real insertion
    // if (supabaseUrl) {
    //  const { data, error } = await supabase.from('leads').insert([{ name, email, company, interest, status: 'new' }]);
    // }

    res.status(201).json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to capture lead' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
