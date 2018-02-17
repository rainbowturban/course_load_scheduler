package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.List;
import org.dselent.course_load_scheduler.client.action.InvalidLoginAction;
import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.errorstring.InvalidLoginStrings;
import org.dselent.course_load_scheduler.client.event.InvalidLoginEvent;
import org.dselent.course_load_scheduler.client.event.SendLoginEvent;
import org.dselent.course_load_scheduler.client.exceptions.EmptyStringException;
import org.dselent.course_load_scheduler.client.presenter.BasePresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.LoginPresenter;
import org.dselent.course_load_scheduler.client.presenter.ManageUserPresenter;
import org.dselent.course_load_scheduler.client.view.BaseView;
import org.dselent.course_load_scheduler.client.view.LoginPageView;
import org.dselent.course_load_scheduler.client.view.LoginView;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;

public class ManageUserPresenterImpl extends BasePresenterImpl implements ManageUserPresenter {
	private LoginPageView view;
	private IndexPresenter parentPresenter;
	
	@Inject
	public ManageUserPresenterImpl(IndexPresenter parentPresenter, LoginPageView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
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

		//button events for when they click on create or cancel buttons
		//		registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		//		eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
	}
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	public IndexPresenter getParentPresenter() {
		return parentPresenter;
	}

	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}
	@Override
	public BaseView<? extends BasePresenter> getView() {
		// TODO Auto-generated method stub
		return null;
	}

	
}
