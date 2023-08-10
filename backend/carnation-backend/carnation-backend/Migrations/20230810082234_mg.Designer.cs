﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using carnation_backend.Data;

#nullable disable

namespace carnation_backend.Migrations
{
    [DbContext(typeof(DatabaseApiDbContext))]
    [Migration("20230810082234_mg")]
    partial class mg
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("carnation_backend.Models.Account", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AType")
                        .HasColumnType("int");

                    b.Property<string>("AccountNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("AccountOwnercid")
                        .HasColumnType("int");

                    b.Property<decimal>("Balance")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("AccountOwnercid");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("carnation_backend.Models.Card", b =>
                {
                    b.Property<int>("cnum")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("cnum"));

                    b.Property<Guid>("aidFK")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("cpin")
                        .HasColumnType("int");

                    b.Property<DateTime>("exp")
                        .HasColumnType("datetime2");

                    b.HasKey("cnum");

                    b.ToTable("Cards");
                });

            modelBuilder.Entity("carnation_backend.Models.Customer", b =>
                {
                    b.Property<int>("cid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("cid"));

                    b.Property<string>("addr")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("age")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("phone")
                        .HasColumnType("int");

                    b.HasKey("cid");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("carnation_backend.Models.Transaction", b =>
                {
                    b.Property<Guid>("Tid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("Aid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("Timestamp")
                        .HasColumnType("datetime2");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Tid");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("carnation_backend.Models.Account", b =>
                {
                    b.HasOne("carnation_backend.Models.Customer", "AccountOwner")
                        .WithMany()
                        .HasForeignKey("AccountOwnercid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AccountOwner");
                });
#pragma warning restore 612, 618
        }
    }
}