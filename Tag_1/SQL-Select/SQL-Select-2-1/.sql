-- 1. Zeige alle Kunden aus der Customers-Tabelle an, deren Name mit A beginnt
SELECT * FROM Customers WHERE ContactName LIKE 'A%'

-- 2. Sortiere die Kunden absteigend nach Postleitzahl 
SELECT * FROM Customers Order by PostalCode DESC

-- 3. Zeige alle Kunden aus Mexico, sortiert zuerst nach Stadt und dann nach Kundenname
SELECT * FROM Customers WHERE Country = 'MExico'  Order by City, CustomerName ASC
SELECT * FROM Customers WHERE Country = 'MExico'  Order by City ASC
SELECT * FROM Customers WHERE Country = 'MExico'  Order by CustomerName ASC

-- 4. Zeige  alle Kunden an, die sich in Deutschland, dem Vereinigten Königreich oder Frankreich befinden.
SELECT * FROM Customers WHERE Country = 'Germany' OR country = 'UK' OR country = 'France'


--! Wechsle zur Tabelle Products
-- 5. Zeige alle Produkte an, die in Flaschen verkauft werden
SELECT * FROM Products Where Unit Like '%bottle%'

-- 6. Zeige alle Produkte an, deren Preis zwischen 20 und 30 Dollar liegt
SELECT * FROM Products Where price  between 20 and 30

-- 7. Erstelle eine Liste, die die Anzahl der Produkte pro Kategorie anzeigt.
SELECT CategoryID, count(*) AS Anzahl FROM Products group by CategoryID