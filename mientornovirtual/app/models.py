from app.database import get_db

class Pizza:
    
    def __init__(self, id_pizza=None, title=None, description=None, banner=None):
        self.id_pizza = id_pizza
        self.title = title
        self.description = description
        self.banner = banner

    def save(self):
        db = get_db()
        cursor = db.cursor()
        if self.id_pizza:
            cursor.execute("""
                UPDATE pizzas SET title = %s, description = %s, banner = %s
                WHERE id_pizza = %s
            """, (self.title, self.description, self.banner, self.id_pizza))
        else:
            cursor.execute("""
                INSERT INTO pizzas (title, description, banner) VALUES (%s, %s, %s)
            """, (self.title, self.description, self.banner))
            self.id_pizza = cursor.lastrowid
        db.commit()
        cursor.close()

    @staticmethod
    def get_all():
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM pizzas")
        rows = cursor.fetchall()
        pizzas = [Pizza(id_pizza=row[0], title=row[1], description=row[2], banner=row[3]) for row in rows]
        cursor.close()
        return pizzas

    @staticmethod
    def get_by_id(pizza_id):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM pizzas WHERE id_pizza = %s", (pizza_id,))
        row = cursor.fetchone()
        cursor.close()
        if row:
            return Pizza(id_pizza=row[0], title=row[1], description=row[2], banner=row[3])
        return None

    def delete(self):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("DELETE FROM pizzas WHERE id_pizza = %s", (self.id_pizza,))
        db.commit()
        cursor.close()

    def serialize(self):
        return {
            'id_pizza': self.id_pizza,
            'title': self.title,
            'description': self.description,
            'banner': self.banner
        }