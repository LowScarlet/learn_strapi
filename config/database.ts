export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'kandula.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'qmknuqgm'),
      user: env('DATABASE_USERNAME', 'qmknuqgm'),
      password: env('DATABASE_PASSWORD', 'HYWTqeyZpyC0mvMVvtCIRZ5LVHn5SDsl'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      max: 4
    }
  },
});
