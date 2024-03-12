<template>
    <section id="Contact" class="section bg-white">
		<div class="container">
			<div class="row">
				<div class="col-12">
                    <div class="title text-center">
                        <h3 class="mx-auto">Contact</h3>
                        <div class="line"></div>
                    </div>
                </div>
			</div>
			<div class="row">
				<div class="col-md-6 offset-md-3">
					<form id="contact-form" action="#">
						<div class="">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Name" required />
							</div>
							<div class="form-group">
								<input type="email" class="form-control" placeholder="E-mail" required>
							</div>
							<div class="form-group">
								<textarea class="form-control" rows="5" placeholder="Your message" required></textarea>
							</div>
							<button type="submit" class="btn btn-block btn-submit">Send Message</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>