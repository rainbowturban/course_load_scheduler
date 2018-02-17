package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.BasePresenter;
import org.dselent.course_load_scheduler.client.view.BaseView;
import com.google.gwt.user.client.ui.Composite;

public abstract class BaseViewImpl<P extends BasePresenter> extends Composite implements BaseView<P>
{
	protected P presenter;

}
