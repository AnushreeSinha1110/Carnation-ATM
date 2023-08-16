using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace carnation_backend.Migrations
{
    /// <inheritdoc />
    public partial class M2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardExpiration",
                table: "Cards");

            migrationBuilder.AddColumn<int>(
                name: "Validity",
                table: "Cards",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Validity",
                table: "Cards");

            migrationBuilder.AddColumn<DateTime>(
                name: "CardExpiration",
                table: "Cards",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
