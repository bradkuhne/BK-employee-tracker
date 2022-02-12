INSERT INTO department (id, name)
VALUES
    (1, 'Human Resources'),
    (2, 'Finance'),
    (3, 'Sales'),
    (4, 'Information Technology'),
    (5, 'Strategy')

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Scorer', 999.12, 1),
    (2, 'Shot blocker', 888.34, 2),
    (3, 'Rebounder', 777.56, 3),
    (4, 'Glue guy', 888.78, 4),
    (5, 'Hustler', 123.45, 5),
    (6, 'Executive', 12345678.00, 2)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Micahel', 'Jordan', 1, 1),
  ('Scotty', 'Pippen', 2, 2),
  ('Charles', 'Barkley', 3, 3),
  ('Larry', 'Bird', 4, 4),
  ('Julius', 'Irving', 5, 5),
  ('Magic', 'Johnson', 1, 2),
  ('Patrick', 'Ewing', 2, 3),
  ('Larry', 'Johnson', 3, 4),
  ('Kareem', 'Abdul-Jabar', 4, 5),
  ('Spud', 'Webb', 6, 5);