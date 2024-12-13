#include <cmath>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>

using namespace std;

string formatRupiah(double nilai) {
  stringstream ss;
  ss << fixed << setprecision(2) << nilai;
  string hasil = ss.str();
  int posDesimal = hasil.find('.');
  string angka = hasil.substr(0, posDesimal);
  string desimal = hasil.substr(posDesimal + 1);

  string angkaDenganTitik;
  int len = angka.length();
  for (int i = 0; i < len; ++i) {
    angkaDenganTitik += angka[i];
    if ((len - i - 1) % 3 == 0 && i != len - 1) {
      angkaDenganTitik += '.';
    }
  }
  return "Rp" + angkaDenganTitik + ',' + desimal;
}

// Opsi 1: Perhitungan Cicilan Pinjaman
void opsi1() {
  double P, rHarian, rBulanan, A, S, selisih;
  int n;

  cout << "Masukkan pokok utang (P): ";
  cin >> P;
  cout << "Masukkan tingkat bunga per hari (dalam persen, misal 0.1 untuk "
          "0,1%): ";
  cin >> rHarian;
  cout << "Masukkan lama waktu cicilan (dalam bulan): ";
  cin >> n;

  rHarian /= 100.0;
  rBulanan = rHarian * 30;

  A = (P * rBulanan) / (1 - pow(1 + rBulanan, -n));
  S = A * n;
  selisih = S - P;

  cout << "\nCicilan per bulan (A): " << formatRupiah(A) << endl;
  cout << "Nilai total pembayaran (S): " << formatRupiah(S) << endl;
  cout << "Selisih pembayaran (biaya bunga): " << formatRupiah(selisih) << endl;
}

string formatNumber(int num) {
  string result = "";
  stringstream ss;
  ss << num;
  string strNum = ss.str();

  int count = 0;
  for (int i = strNum.size() - 1; i >= 0; i--) {
    result = strNum[i] + result;
    count++;
    if (count == 3 && i != 0) {
      result = "." + result;
      count = 0;
    }
  }
  return result;
}

// Opsi 2: Kalkulator Amortisasi
void opsi2() {
  double principal, annualRate;
  int months;

  cout << "Masukkan jumlah pinjaman (Rp): ";
  cin >> principal;
  cout << "Masukkan suku bunga tahunan (%): ";
  cin >> annualRate;
  cout << "Masukkan jangka waktu (bulan): ";
  cin >> months;

  double monthlyRate = annualRate / 12 / 100;
  double monthlyPayment =
      (principal * monthlyRate * pow(1 + monthlyRate, months)) /
      (pow(1 + monthlyRate, months) - 1);

  cout << "Jumlah Pinjaman: Rp" << formatNumber((int)principal) << endl;
  cout << "Suku Bunga Tahunan: " << annualRate << "%" << endl;
  cout << "Jangka Waktu: " << months << " bulan" << endl;
  cout << "Angsuran Bulanan: Rp" << formatNumber((int)monthlyPayment) << endl;
  cout << "\nJadwal Amortisasi:\n";
  cout << "Bulan\tAngsuran\tBunga\t\tPokok\t\tSisa Pinjaman\n";

  double balance = principal;
  for (int i = 1; i <= months; i++) {
    double interest = balance * monthlyRate;
    double principalPayment = monthlyPayment - interest;
    balance -= principalPayment;

    cout << i << "\tRp" << formatNumber((int)monthlyPayment) << "\tRp"
         << formatNumber((int)interest) << "\tRp"
         << formatNumber((int)principalPayment) << "\tRp"
         << formatNumber((balance < 0 ? 0 : (int)balance)) << endl;
  }
}

// Opsi 3: Perencanaan Tabungan
void opsi3() {
  double target, bungaTahunan;
  int tahun;

  cout << "Masukkan jumlah uang yang ingin dikumpulkan (Rp): ";
  cin >> target;
  cout << "Masukkan bunga tahunan (dalam %, misal 2.5 untuk bunga 2,5%): ";
  cin >> bungaTahunan;
  cout << "Masukkan periode waktu (tahun): ";
  cin >> tahun;

  int bulan = tahun * 12;
  double bungaBulanan = (bungaTahunan / 12) / 100;
  double faktor = pow(1 + bungaBulanan, bulan) - 1;
  double tabunganBulanan = target * bungaBulanan / faktor;

  cout << "Jumlah uang yang harus ditabung setiap bulannya sebesar: "
       << formatRupiah(tabunganBulanan) << endl;
}

int main() {
  int pilihan;

  cout << "Pilih opsi program:\n";
  cout << "1. Perhitungan total pembayaran cicilan pinjaman\n";
  cout << "2. Kalkulator rincian pembayaran cicilan\n";
  cout << "3. Perencanaan besar tabungan bulanan untuk investasi impian Anda\n";
  cout << "Masukkan pilihan Anda (1/2/3): ";
  cin >> pilihan;
  switch (pilihan) {
    case 1:
      opsi1();
      break;
    case 2:
      opsi2();
      break;
    case 3:
      opsi3();
      break;
    default:
      cout << "Pilihan tidak valid. Program selesai." << endl;
  }
  return 0;
}