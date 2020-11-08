
CREATE TABLE workspace (
    id SERIAL PRIMARY KEY,
    workspace_id VARCHAR(50),
    status VARCHAR(30),
    runtime_id VARCHAR(50),
    graph_id VARCHAR(50));