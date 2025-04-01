-- ! Tabelle Customers:
-- 1. Zeige alle Länder an, die mehr als fünf Kunden haben
SELECT Country FROM Customers group by Country having count (*) >= 5

-- ! Tabelle Orders:
-- 1. Zeige alle Bestellungen im August 1996 an
SELECT * FROM Orders where OrderDate between #8/1/1996# and #8/31/1996#

-- 2. Zeige alle CustomerIds, die mehr als eine Bestellung getätigt haben
SELECT CustomerID FROM Orders group by CustomerID having count (*) >1

-- 3. Zeige die CustomerId mit den meisten Bestellungen an. Bonus: Zeige direkt den Kundennamen an (nutze JOIN um zwei Tabellenabfragen zu verbinden)
SELECT MAX(x.Bestellungen) FROM( SELECT count(*) AS Bestellungen FROM Orders group by CustomerID) x

SELECT TOP 1 CustomerName FROM (SELECT CustomerID, count(*) AS Bestellungen FROM Orders group by CustomerID) as GroupedOrders INNER JOIN Customers On GroupedOrders.CustomerID=Customers.CustomerID ORDER BY Bestellungen DESC

-- ! Tabelle Products:
-- 1. Zeige alle Produkte an, die von der Firma “Heli Süßwaren GmbH & Co. KG ” geliefert werden
SELECT * FROM Products WHERE SupplierID=11

-- 2. Zeige den Durchschnittspreis aller Produkte an
SELECT Round(AVG(Price)) AS DurchnittsPreis FROM Products;

-- 3. Zeige den Höchstpreis aller Produkte an
SELECT MAX(Price) as Höchstpreis FROM Products;

--! Tabelle Suppliers:
-- 1. Zeige alle Lieferanten an, deren Telefonnummer keine Klammern () enthält
SELECT * FROM Suppliers WHERE Phone NOT LIKE '%(%' AND Phone NOT LIKE '%)%'

-- 2. Liste die Länder mit der Anzahl der Lieferanten auf, sortiert nach der Anzahl der Lieferanten in absteigender Reihenfolge und bei gleicher Anzahl von Lieferanten alphabetisch nach Ländernamen.
SELECT Country, count( *) FROM Suppliers Group by Country order by Count(*) Desc, country asc