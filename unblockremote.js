var body = $response.body;
body = '\/*\n@supported 1E223072C1AC\n*\/\n' + body;

$done(body);
