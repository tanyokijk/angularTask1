import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'gates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gates.component.html',
  styleUrl: './gates.component.css',
})
export class GatesComponent {
  name = 'Bill Gates';
  quotes = [
    'Patience is a key element of success.',
    'If you think your teacher is tough, wait till you get boss.',
    'Life is not fair — get used to it!',
    "Success is a lousy teacher. Це seduces smart people in thinking they can't lose",
    'Be nice to nerds..',
  ];
  image =
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg';
  biography =
    'Білл Гейтс (William Henry Gates III) народився 28 жовтня 1955 року в Сіетлі, штат Вашингтон, США. Він є співзасновником компанії Microsoft, яка була заснована у 1975 році разом з Полом Алленом. Microsoft стала однією з найбільших та найвпливовіших технологічних компаній у світі, розробивши операційні системи Windows та програмне забезпечення Microsoft Office. Гейтс займав посаду генерального директора Microsoft до 2000 року, коли передав керівництво Стіву Баллмеру. Проте він залишався активним у компанії як голова ради директорів і головний архітектор програмного забезпечення до 2006 року, коли вирішив присвятити більше часу благодійній діяльності. Разом зі своєю колишньою дружиною Меліндою він заснував благодійний фонд Bill & Melinda Gates Foundation, який став одним із найбільших приватних благодійних фондів у світі. Фонд займається вирішенням глобальних проблем охорони здоров’я, боротьбою з бідністю, підтримкою освіти та інновацій. Білл Гейтс є одним з найбагатших людей у світі, його статки часто оцінюються в десятки мільярдів доларів. Він також відомий своєю філантропічною діяльністю і впливом на розвиток сучасних технологій.';
  links = [
    'https://en.wikipedia.org/wiki/Bill_Gates',
    'https://www.gatesfoundation.org/',
    'https://www.gatesnotes.com/',
    'https://twitter.com/billgates',
  ];
}
