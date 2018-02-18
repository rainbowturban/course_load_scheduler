package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveLoginAction;
import org.dselent.course_load_scheduler.client.event.ReceiveLoginEvent;
import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.presenter.ExamplePresenter;
import org.dselent.course_load_scheduler.client.view.ExampleView;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;


public class ExamplePresenterImpl extends BasePresenterImpl implements ExamplePresenter
{
	private ExampleView view;
	private User userModel;

	@Inject
	public ExamplePresenterImpl(ExampleView view)
	{
		this.view = view;
		view.setPresenter(this);
	}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		
		registration = eventBus.addHandler(ReceiveLoginEvent.TYPE, this);
		eventBusRegistration.put(ReceiveLoginEvent.TYPE, registration);
	}
		
	@Override
	public void go(HasWidgets container)
	{
		view.getUserIdField().setText(Integer.toString(userModel.getId()));
		view.getUserNameField().setText(userModel.getUserName());
		view.getFirstNameField().setText(userModel.getFirstName());
		view.getLastNameField().setText(userModel.getLastName());
		view.getEmailField().setText(userModel.getEmail());
		view.getUserStateIdField().setText(Integer.toString(userModel.getUserStateId()));
		view.getCreatedAtField().setText(userModel.getCreatedAt().toString());
		view.getUpdatedAtField().setText(userModel.getUpdatedAt().toString());
		
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public ExampleView getView()
	{
		return view;
	}
	
	@Override
	public void onReceiveLogin(ReceiveLoginEvent evt)
	{
		HasWidgets container = evt.getContainer();
		ReceiveLoginAction rla = evt.getAction();

		userModel = rla.getModel();
		
		// show myself
		go(container);
		
		// use injector to get to index presenter
		// hide loading screen
		Injector.INSTANCE.getIndexPresenter().hideLoadScreen();
	}

}