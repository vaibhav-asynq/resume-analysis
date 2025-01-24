export async function setupDatabase(db) {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS analyses (
        id INTEGER PRIMARY KEY,
        job_description TEXT NOT NULL,
        analysis_result TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Database setup completed');
  } catch (error) {
    console.error('Database setup error:', error);
    throw error;
  }
}
