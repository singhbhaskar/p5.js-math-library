VAGRANTFILE_API_VERSION = "2"

$script = <<SCRIPT
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install -y chromium-browser
pushd /home/vagrant
mkdir .local
curl -o node.tar.xz https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz
tar xf node.tar.xz -C .local --strip-components=1
rm node.tar.xz
popd
SCRIPT

$npm_update = <<SCRIPT
npm update -g npm
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.provider "virtualbox" do |vb|
    vb.cpus = 2
    vb.memory = 2048
  end
  config.vm.provision "shell", inline: $script, privileged: false
  config.vm.provision "shell", inline: $npm_update, privileged: false
end
