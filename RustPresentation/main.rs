fn main() {
    let mut names: Vec<String> = Vec::new();
    names = add_name(&mut names);

    println!("Names: {:#?}", names);
}

fn add_name(names: &mut Vec<String>) -> Vec<String> {
    let new_name = String::from("Joe Rance");

    names.push(new_name);
    return names.clone();
}