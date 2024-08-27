import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vlkgcojjkxrenlnvqxkj.supabase.co'
const supabasePublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsa2djb2pqa3hyZW5sbnZxeGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NzY4MDMsImV4cCI6MjA0MDM1MjgwM30.xI2ZyBSBphVAEZtP5cpn4qh2hBnhtUCfy4BAtdk74IU'

const supabase = createClient(supabaseUrl, supabasePublicKey)

export default supabase