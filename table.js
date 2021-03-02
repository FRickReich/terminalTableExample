/**
 * @class Table
 * @description
 * Ein programm zum erstellen von Tabellen in der Konsole
 * @
 */
class Table
{
    /**
     * @constructor
     */
    // Advanced:
    // constructor({ title, width, columns, rows} = {})
    // {
    //     this.tableTitle = title || 'Default Table';
    //     this.tableWidth = width || process.stdout.columns;
    //     this.tableColumns = columns || [];
    //     this.tableRows = rows || [];
    // };
    constructor()
    {
        this.tableTitle = 'Default Table';
        this.tableWidth = process.stdout.columns;
        this.tableColumns = [];
        this.tableRows = [];
    };

    /**
     * Getter/Setter
     */
    getTitle = () => this.tableTitle;
    setTitle = (title) => this.tableTitle = title;
    getWidth = () => this.tableWidth;
    setWidth = (width) => this.tableWidth = width;
    getColumns = () => this.tableColumns;
    setColumns = (columns) => this.tableColumns = columns;
    getRows = () => this.tableRows;
    setRows = (rows) => this.tableRows = rows;

    /**
     * 
     */
    createTitle = () =>
    {
        const padding = Math.round((this.tableWidth - this.tableTitle.length) / 2);
        
        return `\n${ " ".repeat(padding) }${ this.tableTitle }${ " ".repeat(padding) }`;
    }

    /**
     * @method createColumn();
     * @description
     * Erstellt eine Spalte.
     * @param { string } text 
     * @param { number } width
     * @returns { string }
     */
    createColumn = (text, width) =>
    {
        const columnWidth = width - text.toString().length || 20;

        return " " + text.toString() + " ".repeat(columnWidth - 3) + "|";
    }

    /**
     * @method createRow();
     * @description
     * Erstellt eine Zeile.
     * @param { object } rowContent 
     * @returns { string }
     */
    createRow = (rowContent) =>
    {
        let tempString = "|";
        let width = this.tableWidth;

        for(let row in rowContent)
        {
            let width = this.tableWidth;

            this.tableColumns.forEach((column, i) =>
            {
                if(column.key === row)
                {
                    if(this.tableColumns.length === i + 1)
                    {
                        tempString += this.createColumn(rowContent[row], width + 2);
                    }
                    else
                    {
                        tempString += this.createColumn(rowContent[row], column.width);
                    }
                }

                width -= column.width;
            });
        }

        return tempString;
    }

    /**
     * @method createHeader();
     * @description
     * Erstellt den header.
     * @returns { string }
     */
    createHeader = () =>
    {
        let tempString = "|";
        let width = this.tableWidth;

        this.tableColumns.forEach((column, i) =>
        {   
            if(this.tableColumns.length === i + 1)
            {
                tempString += this.createColumn(column.title, width + 2);
            }
            else
            {
                tempString += this.createColumn(column.title, column.width);
            }
            
            width -= column.width;
        });

        return tempString;
    }

    /**
     * @method createDivider();
     * Erstellt den divider.
     * @returns { string }
     */
    createDivider = () =>
    {
        let tempString = "|";
        let width = this.tableWidth;

        this.tableColumns.forEach((column, i) =>
        {
            if(this.tableColumns.length === i + 1)
            {
                tempString += "-".repeat(width) + "|";
            }
            else
            {
                tempString += "-".repeat(column.width - 2 || 20 ) + "|";
            }

            width -= column.width;
        });

        return tempString;
    }

    /**
     * @method ShowTable();
     * @description
     * Fügt alle methoden zusammen und gibt sie im terminal aus.
     */
    showTable = () =>
    {
        console.log(this.createTitle());
        console.log(this.createHeader());
        console.log(this.createDivider());

        this.tableRows.forEach((row, i) => {
            console.log(this.createRow(row));
        });
    }
}

/**
 * @exports
 * @description exportiert die klasse Table für die externe benutzung.
 */
module.exports = Table;
